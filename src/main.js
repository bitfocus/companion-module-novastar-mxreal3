const { InstanceBase, Regex, UDPHelper, runEntrypoint, InstanceStatus } = require('@companion-module/base');

const actions = require('./actions');
const UpgradeScripts = require('./upgrades');
const presets = require('./presets');
const feedbacks = require('./feedbacks');

const { sendStart, decodeControlProtocol } = require('../utils/cmdCodec');
const {
  serverPort,
  clientPort,
  TagCodes,
  PRODUCTS_INFO,
  PRODUCTS_INFORMATION,
} = require('../utils/constant');

class ModuleInstance extends InstanceBase {
  constructor(internal) {
    super(internal);

    Object.assign(this, {
      ...actions,
    });

    this.PRODUCTS_INFO = PRODUCTS_INFO;
    this.PRODUCTS = Object.values(this.PRODUCTS_INFO);

    this.lastStatus = 0;
  }

  updateActions() {
    this.setActionDefinitions(actions.getActions(this));
  }

  updateFeedbacks() {
    this.setFeedbackDefinitions(feedbacks.getFeedbacks(this));
  }

  updateDeviceStatus() {
    if (this.lastStatus === 0) {

      this.log('debug', 'device status maybe offline');
      this.updateStatus(InstanceStatus.Connecting);
      this.initUDP();
    } else {
      this.log('debug', 'update device status');
      this.lastStatus = 0;
      sendStart(this);
    }
  }

  initUDP() {
    this.log('info', 'initUDP');
    this.log('info', `host: ${this.config.host}`);
    if (this.udp) {
      this.udp.destroy();
      delete this.udp;
    }

    if (this.config.host) {
      this.udp = new UDPHelper(this.config.host, serverPort, { bind_port: clientPort });

      this.udp.on('error', (err) => {
        this.log('error', 'Network error: ' + err.message);
        this.updateStatus(InstanceStatus.ConnectionFailure, err.message);
      });

      this.udp.on('listening', () => {
        this.log('debug', 'UDP listening');
        sendStart(this);
      });

      // If we get data, thing should be good
      this.udp.on('data', (msg) => {
        this.log('debug', 'initUDP getData');

        const res = decodeControlProtocol(msg);

        this.log('debug', `initUDP-code: ${res.tag}`);
        if (res.tag === TagCodes.response) {
          this.log('debug', `res-tag: ${res.tag}`);
          this.updateStatus(InstanceStatus.Ok);
          this.lastStatus = 1;
          return;
        } else {
          console.log(`res-tag: ${res.tag}`);
          this.log('debug', `res-tag: ${res.tag}`);
          return;
        }
      });

      this.udp.on('status_change', (status, message) => {
        if (status !== 'ok') {
          this.updateStatus(status, message);
        }
        this.log('debug', 'UDP status_change: ' + status);
      });
      this.log('debug', 'initUDP finish');
    } else {
      this.log('error', 'No host configured');
      this.updateStatus(InstanceStatus.BadConfig);
    }
  }

  initLatchActions() {
    this.config = {
      ...this.config,
      latchActions: {
        'play': 0,
        'volume': 0,
        'ftb': 0,
        'freeze': 0,
        'output': 0
      }
    };
  }

  async init(config) {
    this.updateStatus(InstanceStatus.Connecting);

    this.config = config;

    if (this.config.modelId !== undefined) {
      this.config.model = this.PRODUCTS_INFO[this.config.modelId];
    } else {
      this.config.modelId = this.PRODUCTS[0];
      this.config.model = this.PRODUCTS_INFO[this.config.modelId];
    }


    this.initUDP();
    this.initLatchActions();

    if (this.heartbeat) {
      clearInterval(this.heartbeat);
      delete this.heartbeat;
    }
    this.heartbeat = setInterval(() => this.updateDeviceStatus(), 10000);

    this.updateActions();
    this.updateFeedbacks();
    this.setPresetDefinitions(presets.getPresetDefinitions(this));
  }

  // When module gets deleted
  async destroy() {
    if (this.udp !== undefined) {
      this.udp.destroy();
    }
    this.log('debug', 'destroy');
  }

  // Return config fields for web config
  getConfigFields() {
    return [
      {
        type: 'static-text',
        id: 'info',
        width: 12,
        label: 'Information',
        value: PRODUCTS_INFORMATION,
      },
      {
        type: 'textinput',
        id: 'host',
        label: 'IP Address',
        width: 6,
        default: '192.168.0.1',
        regex: Regex.IP,
      },
      {
        type: 'dropdown',
        id: 'modelId',
        label: 'Model',
        width: 6,
        choices: this.PRODUCTS,
        default: this.PRODUCTS[0].id,
      },
    ];
  }

  async configUpdated(config) {
    let resetConnection = false;

    if (this.config.host != config.host) {
      resetConnection = true;
    }

    this.log('info', 'configUpdated module....');

    this.config = {
      ...this.config,
      ...config
    };
    this.model = this.PRODUCTS[config.modelId];

    if (resetConnection === true) {
      this.updateStatus(InstanceStatus.Connecting);
      this.initLatchActions();
      this.initUDP();

      if (this.heartbeat) {
        clearInterval(this.heartbeat);
        delete this.heartbeat;
      }
      this.heartbeat = setInterval(() => this.updateDeviceStatus(), 10000);
    }
  }
}

runEntrypoint(ModuleInstance, UpgradeScripts);
