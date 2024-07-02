const { combineRgb } = require('@companion-module/base');

exports.getFeedbacks = (instance) => {
  let feedbacks = {};

  feedbacks['play'] = {
    type: 'boolean',
    name: 'Play Status Detection',
    description: 'Change the style when Play is pressed.',
    defaultStyle: {
      text: 'Pause',
    },
    options: [],
    callback: () => instance.config.latchActions.play === '1',
  };

  feedbacks['volume'] = {
    type: 'boolean',
    name: 'Audio Status Detection',
    description: 'Change the style when Audio is pressed.',
    defaultStyle: {
      bgcolor: combineRgb(255, 0, 0),
    },
    options: [],
    callback: () => instance.config.latchActions.volume === '1',
  };

  feedbacks['ftb'] = {
    type: 'boolean',
    name: 'FTB Status Detection',
    description: 'Change the style when FTB is pressed.',
    defaultStyle: {
      bgcolor: combineRgb(255, 0, 0),
    },
    options: [],
    callback: () => instance.config.latchActions.ftb === '1',
  };

  feedbacks['freeze'] = {
    type: 'boolean',
    name: 'Freeze Status Detection',
    description: 'Change the style when Freeze is pressed.',
    defaultStyle: {
      bgcolor: combineRgb(255, 0, 0),
    },
    options: [],
    callback: () => instance.config.latchActions.freeze === '1',
  };

  feedbacks['output'] = {
    type: 'boolean',
    name: 'Output Status Detection',
    description: 'Change the style when Outputs is pressed.',
    defaultStyle: {
      bgcolor: combineRgb(255, 0, 0),
    },
    options: [],
    callback: () => instance.config.latchActions.output === '1',
  };

  return feedbacks;
};
