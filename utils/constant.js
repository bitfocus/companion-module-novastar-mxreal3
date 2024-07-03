/**
 * XR UDP 端口号
 */
const serverPort = 23334;
/**
 * node 客户端 UDP 端口号
 */
const clientPort = 23335;

/**
 * 协议号
 */
const TagCodes = {
  request: 98,
  response: 99,
  timeLinePlay: 100,
  timeLinePause: 101,
  timeLineStop: 126,
  playPrevious: 102,
  playNext: 103,
  previousCUE: 104,
  nextCUE: 105,
  cam1: 106,
  cam2: 107,
  camPrevious: 108,
  camNext: 109,
  openVolume: 110,
  closeVolume: 111,
  volumeUp: 112,
  volumeDown: 113,
  openFTB: 114,
  closeFTB: 115,
  freeze: 116,
  Unfreeze: 117,
  lightUp: 118,
  lightDown: 119,
  openOutput: 120,
  closeOutput: 121,
  xrUp: 122,
  xrDown: 123,
  emergenceUp: 124,
  emergenceDown: 125,
};

const PRODUCTS_INFO = {
  rx6: { id: 'xr', label: 'NovaStar MxReal 3' },
};

const PRODUCTS_INFORMATION = 'This module will allow you to control the following products: MxReal 3.';

module.exports = {
  serverPort,
  clientPort,
  TagCodes,
  PRODUCTS_INFO,
  PRODUCTS_INFORMATION
};