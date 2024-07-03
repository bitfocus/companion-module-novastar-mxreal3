const codec = require('../utils/cmdCodec.js');
const { TagCodes } = require('../utils/constant.js');

exports.getActions = function (instance) {
  let actions = {};

  actions['play'] = {
    name: 'Play & Pause: Play or pause the timeline.',
    options: [
      {
        type: 'dropdown',
        name: 'Play',
        id: 'play',
        default: '1',
        choices: [
          {
            id: '0',
            label: 'Pause',
          },
          {
            id: '1',
            label: 'Play',
          },
        ],
      },
    ],
    callback: async (event) => {
      try {
        const value = event.options.play;
        const cmd = codec.encodeControlProtocol({
          tag: value === '0' ? TagCodes.timeLinePause : TagCodes.timeLinePlay
        });
        await instance.udp.send(cmd);
        instance.config.latchActions.play = value;
        instance.checkFeedbacks('play');
      } catch (error) {
        instance.log('error', 'TimeLine Play cmd send error');
      }
    }
  };

  actions['stop'] = {
    name: 'Stop: Stop the timeline.',
    options: [],
    callback: async (event) => {
      try {
        const cmd = codec.encodeControlProtocol({
          tag: TagCodes.timeLineStop
        });
        await instance.udp.send(cmd);
      } catch (error) {
        instance.log('error', 'TimeLine Stop cmd send error');
      }
    }
  };

  actions['play_previous'] = {
    name: 'Previous Clip: Move the cursor on the timeline to the previous clip.',
    options: [],
    callback: async (event) => {
      try {
        const cmd = codec.encodeControlProtocol({
          tag: TagCodes.playPrevious
        });
        await instance.udp.send(cmd);
      } catch (error) {
        instance.log('error', 'Previous Clip cmd send error');
      }
    }
  };

  actions['play_next'] = {
    name: 'Next Clip: Move the cursor on the timeline to the next clip.',
    options: [],
    callback: async (event) => {
      try {
        const cmd = codec.encodeControlProtocol({
          tag: TagCodes.playNext
        });
        await instance.udp.send(cmd);
      } catch (error) {
        instance.log('error', 'Next Clip cmd send error');
      }
    }
  };

  actions['previous_cue'] = {
    name: 'Previous Cue: Move the cursor on the timeline to the previous Cue.',
    options: [],
    callback: async (event) => {
      try {
        const cmd = codec.encodeControlProtocol({
          tag: TagCodes.previousCUE
        });
        await instance.udp.send(cmd);
      } catch (error) {
        instance.log('error', 'Previous Cue cmd send error');
      }
    }
  };

  actions['next_cue'] = {
    name: 'Next Cue: Move the cursor on the timeline to the next Cue.',
    options: [],
    callback: async (event) => {
      try {
        const cmd = codec.encodeControlProtocol({
          tag: TagCodes.nextCUE
        });
        await instance.udp.send(cmd);
      } catch (error) {
        instance.log('error', 'Next Cue cmd send error');
      }
    }
  };

  actions['cam1'] = {
    name: 'Workflow 1: Switch the preview screen to the Workflow 1 screen.',
    options: [],
    callback: async (event) => {
      try {
        const cmd = codec.encodeControlProtocol({
          tag: TagCodes.cam1
        });
        await instance.udp.send(cmd);
      } catch (error) {
        instance.log('error', 'Workflow 1 cmd send error');
      }
    }
  };

  actions['cam2'] = {
    name: 'Workflow 2: Switch the preview screen to the Workflow 2 screen.',
    options: [],
    callback: async (event) => {
      try {
        const cmd = codec.encodeControlProtocol({
          tag: TagCodes.cam2
        });
        await instance.udp.send(cmd);
      } catch (error) {
        instance.log('error', 'Workflow 2:  cmd send error');
      }
    }
  };

  actions['cam_previous'] = {
    name: 'Previous Workflow: Switch the preview screen to the previous workflow screen.',
    options: [],
    callback: async (event) => {
      try {
        const cmd = codec.encodeControlProtocol({
          tag: TagCodes.camPrevious
        });
        await instance.udp.send(cmd);
      } catch (error) {
        instance.log('error', 'Previous Workflow cmd send error');
      }
    }
  };

  actions['cam_next'] = {
    name: 'Next Workflow: Switch the preview screen to the next workflow screen.',
    options: [],
    callback: async (event) => {
      try {
        const cmd = codec.encodeControlProtocol({
          tag: TagCodes.camNext
        });
        await instance.udp.send(cmd);
      } catch (error) {
        instance.log('error', 'Next Workflow cmd send error');
      }
    }
  };

  actions['volume'] = {
    name: 'Audio On/Off: Turn on or turn off the global audio.',
    options: [
      {
        type: 'dropdown',
        name: 'Volume',
        id: 'volume',
        default: '1',
        choices: [
          {
            id: '0',
            label: 'Close Volume',
          },
          {
            id: '1',
            label: 'Open Volume',
          },
        ],
      },
    ],
    callback: async (event) => {
      try {
        const value = event.options.volume;
        const cmd = codec.encodeControlProtocol({
          tag: value === '0' ? TagCodes.closeVolume : TagCodes.openVolume
        });
        await instance.udp.send(cmd);
        instance.config.latchActions.volume = value;
        instance.checkFeedbacks('volume');
      } catch (error) {
        instance.log('error', 'Audio On/Off send error');
      }
    },
  };

  actions['volume_up'] = {
    name: 'Volume +: Increase the global audio volume.',
    options: [],
    callback: async (event) => {
      try {
        const cmd = codec.encodeControlProtocol({
          tag: TagCodes.volumeUp
        });
        await instance.udp.send(cmd);
      } catch (error) {
        instance.log('error', 'Volume + cmd send error');
      }
    }
  };

  actions['volume_down'] = {
    name: 'Volume -: Decrease the global audio volume.',
    options: [],
    callback: async (event) => {
      try {
        const cmd = codec.encodeControlProtocol({
          tag: TagCodes.volumeDown
        });
        await instance.udp.send(cmd);
      } catch (error) {
        instance.log('error', 'Volume - cmd send error');
      }
    }
  };

  actions['ftb'] = {
    name: 'FTB On/Off: Control the output FTB state.',
    options: [
      {
        type: 'dropdown',
        name: 'FTB',
        id: 'ftb',
        default: '1',
        choices: [
          {
            id: '0',
            label: 'No fade to black',
          },
          {
            id: '1',
            label: 'Fade to black',
          },
        ],
      },
    ],
    callback: async (event) => {
      try {
        const value = event.options.ftb;
        const cmd = codec.encodeControlProtocol({
          tag: value === '0' ? TagCodes.closeFTB : TagCodes.openFTB
        });
        await instance.udp.send(cmd);
        instance.config.latchActions.ftb = value;
        instance.checkFeedbacks('ftb');
      } catch (error) {
        instance.log('error', 'FTB status cmd send error');
      }
    },
  };

  actions['freeze'] = {
    name: 'Freeze On/Off: Control the output freeze state.',
    options: [
      {
        type: 'dropdown',
        name: 'Freeze',
        id: 'freeze',
        default: '1',
        choices: [
          {
            id: '0',
            label: 'Unfreeze',
          },
          {
            id: '1',
            label: 'Freeze',
          },
        ],
      },
    ],
    callback: async (event) => {
      try {
        const value = event.options.freeze;
        const cmd = codec.encodeControlProtocol({
          tag: value === '0' ? TagCodes.Unfreeze : TagCodes.freeze
        });
        await instance.udp.send(cmd);
        instance.config.latchActions.freeze = value;
        instance.checkFeedbacks('freeze');
      } catch (error) {
        instance.log('error', 'Freeze status cmd send error');
      }
    },
  };

  actions['light_up'] = {
    name: 'Brightness +: Increase the output brightness.',
    options: [],
    callback: async (event) => {
      try {
        const cmd = codec.encodeControlProtocol({
          tag: TagCodes.lightUp
        });
        await instance.udp.send(cmd);
      } catch (error) {
        instance.log('error', 'Brightness + cmd send error');
      }
    }
  };

  actions['light_down'] = {
    name: 'Brightness -: Decrease the output brightness. ',
    options: [],
    callback: async (event) => {
      try {
        const cmd = codec.encodeControlProtocol({
          tag: TagCodes.lightDown
        });
        await instance.udp.send(cmd);
      } catch (error) {
        instance.log('error', 'Brightness - cmd send error');
      }
    }
  };

  actions['output'] = {
    name: 'All Outputs On/Off: Connect or disconnect all outputs.',
    options: [
      {
        type: 'dropdown',
        name: 'Output',
        id: 'output',
        default: '1',
        choices: [
          {
            id: '0',
            label: 'Close',
          },
          {
            id: '1',
            label: 'Open',
          },
        ],
      },
    ],
    callback: async (event) => {
      try {
        const value = event.options.output;
        const cmd = codec.encodeControlProtocol({
          tag: value === '0' ? TagCodes.closeOutput : TagCodes.openOutput
        });
        await instance.udp.send(cmd);
        instance.config.latchActions.output = value;
        instance.checkFeedbacks('output');
      } catch (error) {
        instance.log('error', 'All Outputs On/Off cmd send error');
      }
    },
  };

  actions['xr_up'] = {
    name: 'Extension +: Expand the range of extension effect.',
    options: [],
    callback: async (event) => {
      try {
        const cmd = codec.encodeControlProtocol({
          tag: TagCodes.xrUp
        });
        await instance.udp.send(cmd);
      } catch (error) {
        instance.log('error', 'Extension + cmd send error');
      }
    }
  };

  actions['xr_down'] = {
    name: 'Extension -: Narrow the range of extension effect.',
    options: [],
    callback: async (event) => {
      try {
        const cmd = codec.encodeControlProtocol({
          tag: TagCodes.xrDown
        });
        await instance.udp.send(cmd);
      } catch (error) {
        instance.log('error', 'Extension -:  cmd send error');
      }
    }
  };

  actions['emergence_up'] = {
    name: 'Feathering +: Expand the range of feathering effect.',
    options: [],
    callback: async (event) => {
      try {
        const cmd = codec.encodeControlProtocol({
          tag: TagCodes.emergenceUp
        });
        await instance.udp.send(cmd);
      } catch (error) {
        instance.log('error', 'Feathering + cmd send error');
      }
    }
  };

  actions['emergence_down'] = {
    name: 'Feathering -: Narrow the range of feathering effect.',
    options: [],
    callback: async (event) => {
      try {
        const cmd = codec.encodeControlProtocol({
          tag: TagCodes.emergenceDown
        });
        await instance.udp.send(cmd);
      } catch (error) {
        instance.log('error', 'Feathering - cmd send error');
      }
    }
  };

  return actions;
};
