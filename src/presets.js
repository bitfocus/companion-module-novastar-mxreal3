const { combineRgb } = require('@companion-module/base');

const timeLinePresets = {
  play: {
    type: 'button',
    category: 'Timeline',
    name: 'Play',
    style: {
      text: 'Play',
      size: '18',
      color: combineRgb(255, 255, 255),
      bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
      {
        down: [
          {
            actionId: 'play',
            options: {
              play: '1',
            },
          },
        ],
      },
      {
        down: [
          {
            actionId: 'play',
            options: {
              play: '0',
            },
          },
        ],
      },
    ],
    feedbacks: [
      {
        feedbackId: 'play',
        style: {
          text: 'Pause',
        },
        options: {}
      }
    ],
  },
  stop: {
    type: 'button',
    category: 'Timeline',
    name: 'Stop',
    style: {
      text: 'Stop',
      size: '18',
      color: combineRgb(255, 255, 255),
      bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
      {
        down: [
          {
            actionId: 'stop',
            options: {},
          },
        ],
      },
    ],
    feedbacks: [],
  },
  play_previous: {
    type: 'button',
    category: 'Timeline',
    name: 'Play Previous',
    style: {
      text: 'Previous Clip',
      size: '14',
      color: combineRgb(255, 255, 255),
      bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
      {
        down: [
          {
            actionId: 'play_previous',
            options: {},
          },
        ],
      },
    ],
    feedbacks: [],
  },
  play_next: {
    type: 'button',
    category: 'Timeline',
    name: 'Play Next',
    style: {
      text: 'Next Clip',
      size: '18',
      color: combineRgb(255, 255, 255),
      bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
      {
        down: [
          {
            actionId: 'play_next',
            options: {},
          },
        ],
      },
    ],
    feedbacks: [],
  },
  previous_cue: {
    type: 'button',
    category: 'Timeline',
    name: 'Previous Cue',
    style: {
      text: 'Previous Cue',
      size: '14',
      color: combineRgb(255, 255, 255),
      bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
      {
        down: [
          {
            actionId: 'previous_cue',
            options: {},
          },
        ],
      },
    ],
    feedbacks: [],
  },
  next_cue: {
    type: 'button',
    category: 'Timeline',
    name: 'Next Cue',
    style: {
      text: 'Next Cue',
      size: '18',
      color: combineRgb(255, 255, 255),
      bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
      {
        down: [
          {
            actionId: 'next_cue',
            options: {},
          },
        ],
      },
    ],
    feedbacks: [],
  },
};

const guidePresets = {
  cam1: {
    type: 'button',
    category: 'Preview',
    name: 'CAM 1',
    style: {
      text: 'Workflow 1',
      size: '14',
      color: combineRgb(255, 255, 255),
      bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
      {
        down: [
          {
            actionId: 'cam1',
            options: {},
          },
        ],
      },
    ],
    feedbacks: [],
  },
  cam2: {
    type: 'button',
    category: 'Preview',
    name: 'CAM 2',
    style: {
      text: 'Workflow 2',
      size: '14',
      color: combineRgb(255, 255, 255),
      bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
      {
        down: [
          {
            actionId: 'cam2',
            options: {},
          },
        ],
      },
    ],
    feedbacks: [],
  },
  cam_previous: {
    type: 'button',
    category: 'Preview',
    name: 'CAM Previous',
    style: {
      text: 'Previous Workflow',
      size: '14',
      color: combineRgb(255, 255, 255),
      bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
      {
        down: [
          {
            actionId: 'cam_previous',
            options: {},
          },
        ],
      },
    ],
    feedbacks: [],
  },
  cam_next: {
    type: 'button',
    category: 'Preview',
    name: 'CAM Next',
    style: {
      text: 'Next Workflow',
      size: '14',
      color: combineRgb(255, 255, 255),
      bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
      {
        down: [
          {
            actionId: 'cam_next',
            options: {},
          },
        ],
      },
    ],
    feedbacks: [],
  },
};

const outputCtrlPresets = {
  volume: {
    type: 'button',
    category: 'Output',
    name: 'Volume',
    style: {
      text: 'Audio',
      size: '18',
      color: combineRgb(255, 255, 255),
      bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
      {
        down: [
          {
            actionId: 'volume',
            options: {
              volume: '1',
            },
          },
        ],
      },
      {
        down: [
          {
            actionId: 'volume',
            options: {
              volume: '0',
            },
          },
        ],
      },
    ],
    feedbacks: [
      {
        feedbackId: 'volume',
        style: {
          bgcolor: combineRgb(255, 0, 0),
        },
        options: {}
      }
    ],
  },
  volume_up: {
    type: 'button',
    category: 'Output',
    name: 'Volume +',
    style: {
      text: 'Volume +',
      size: '18',
      color: combineRgb(255, 255, 255),
      bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
      {
        down: [
          {
            actionId: 'volume_up',
            options: {},
          },
        ],
      },
    ],
    feedbacks: [],
  },
  volume_down: {
    type: 'button',
    category: 'Output',
    name: 'Volume -',
    style: {
      text: 'Volume -',
      size: '18',
      color: combineRgb(255, 255, 255),
      bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
      {
        down: [
          {
            actionId: 'volume_down',
            options: {},
          },
        ],
      },
    ],
    feedbacks: [],
  },
  ftb: {
    type: 'button',
    category: 'Output',
    name: 'FTB',
    style: {
      text: 'FTB',
      size: '18',
      color: combineRgb(255, 255, 255),
      bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
      {
        down: [
          {
            actionId: 'ftb',
            options: {
              ftb: "1"
            },
          },
        ],
      },
      {
        down: [
          {
            actionId: 'ftb',
            options: {
              ftb: '0'
            },
          },
        ],
      },
    ],
    feedbacks: [
      {
        feedbackId: 'ftb',
        style: {
          bgcolor: combineRgb(255, 0, 0),
        },
        options: {}
      }
    ],
  },
  freeze: {
    type: 'button',
    category: 'Output',
    name: 'Freeze',
    style: {
      text: 'Freeze',
      size: '18',
      color: combineRgb(255, 255, 255),
      bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
      {
        down: [
          {
            actionId: 'freeze',
            options: {
              freeze: '1',
            },
          },
        ],
      },
      {
        down: [
          {
            actionId: 'freeze',
            options: {
              freeze: '0',
            },
          },
        ],
      },
    ],
    feedbacks: [
      {
        feedbackId: 'freeze',
        style: {
          bgcolor: combineRgb(255, 0, 0),
        },
        options: {}
      }
    ],
  },
  light_up: {
    type: 'button',
    category: 'Output',
    name: 'Light +',
    style: {
      text: 'Brightness +',
      size: '14',
      color: combineRgb(255, 255, 255),
      bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
      {
        down: [
          {
            actionId: 'light_up',
            options: {},
          },
        ],
      },
    ],
    feedbacks: [],
  },
  light_down: {
    type: 'button',
    category: 'Output',
    name: 'Light -',
    style: {
      text: 'Brightness -',
      size: '14',
      color: combineRgb(255, 255, 255),
      bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
      {
        down: [
          {
            actionId: 'light_down',
            options: {},
          },
        ],
      },
    ],
    feedbacks: [],
  },
  output: {
    type: 'button',
    category: 'Output',
    name: 'Output',
    style: {
      text: 'Outputs',
      size: '18',
      color: combineRgb(255, 255, 255),
      bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
      {
        down: [
          {
            actionId: 'output',
            options: {
              output: '1',
            },
          },
        ],
      },
      {
        down: [
          {
            actionId: 'output',
            options: {
              output: '0',
            },
          },
        ],
      },
    ],
    feedbacks: [
      {
        feedbackId: 'output',
        style: {
          bgcolor: combineRgb(255, 0, 0),
        },
        options: {}
      }
    ],
  },
  xr_up: {
    type: 'button',
    category: 'Output',
    name: 'XR +',
    style: {
      text: 'Extension +',
      size: '14',
      color: combineRgb(255, 255, 255),
      bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
      {
        down: [
          {
            actionId: 'xr_up',
            options: {},
          },
        ],
      },
    ],
    feedbacks: [],
  },
  xr_down: {
    type: 'button',
    category: 'Output',
    name: 'XR -',
    style: {
      text: 'Extension -',
      size: '14',
      color: combineRgb(255, 255, 255),
      bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
      {
        down: [
          {
            actionId: 'xr_down',
            options: {},
          },
        ],
      },
    ],
    feedbacks: [],
  },
  emergence_up: {
    type: 'button',
    category: 'Output',
    name: 'Emergence +',
    style: {
      text: 'Feathering +',
      size: '14',
      color: combineRgb(255, 255, 255),
      bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
      {
        down: [
          {
            actionId: 'emergence_up',
            options: {},
          },
        ],
      },
    ],
    feedbacks: [],
  },
  emergence_down: {
    type: 'button',
    category: 'Output',
    name: 'Emergence -',
    style: {
      text: 'Feathering -',
      size: '14',
      color: combineRgb(255, 255, 255),
      bgcolor: combineRgb(0, 0, 0),
    },
    steps: [
      {
        down: [
          {
            actionId: 'emergence_down',
            options: {},
          },
        ],
      },
    ],
    feedbacks: [],
  },
};


exports.getPresetDefinitions = function () {
  return {
    ...timeLinePresets,
    ...guidePresets,
    ...outputCtrlPresets,
  };
};
