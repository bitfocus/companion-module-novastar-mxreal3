const { TagCodes } = require('../utils/constant');

const toHex = (number, length) => {
  let hexString = number.toString(16);
  hexString = hexString.padStart(length * 2, 0);

  let byteArr = [];
  for (let i = hexString.length - 2; i >= 0; i -= 2) {
    byteArr.push(`0x${hexString.substr(i, 2)}`);
  }
  return byteArr;
};

exports.decodeControlProtocol = (data) => {
  const tlvStartFind = 12;
  const totalBuf = new Uint8Array(data).buffer;
  const dataView = new DataView(totalBuf);
  const tag = dataView.getUint16(tlvStartFind, true);
  const tlvDataLength = dataView.getUint16(tlvStartFind + 2, true);
  const valBuffer = totalBuf.slice(
    tlvStartFind + 4,
    tlvDataLength + tlvStartFind + 4,
  );
  const result = {
    tag,
    data: valBuffer,
  };
  return result;
};

const encodeControlProtocol = (data) => {
  const dataLen = data.dataLen ?? 0;
  const PROTOCOL_HEAD = [0xcc, 0x55, 0xcc, 0x55];
  const PACKET_TYPE = [0x01, 0x00];
  const PROTOCOL_VERSION = [0x30, 0x02];
  const SEQUENCE = [0x02, 0x00];
  const HEAD = [
    ...PROTOCOL_HEAD,
    ...PACKET_TYPE,
    ...PROTOCOL_VERSION,
    ...SEQUENCE,
  ];
  const valLenBuffer = toHex(dataLen, 2);
  const dataBuffer = dataLen > 0 ? toHex(data.data, dataLen) : [];
  const contentLenBuffer = toHex(dataLen + 4, 2);
  const bufferLen = dataLen + 16;

  const buffer = new ArrayBuffer(bufferLen);
  const unit8 = new Uint8Array(buffer);

  unit8.set(HEAD, 0);
  unit8.set(contentLenBuffer, 10);
  unit8.set(toHex(data.tag, 2), 12);
  unit8.set(valLenBuffer, 14);
  unit8.set(dataBuffer, 16);

  return unit8;
};
exports.encodeControlProtocol = encodeControlProtocol;

exports.sendStart = function (instance) {
  const data = {
    tag: TagCodes.request
  };
  const cmd = encodeControlProtocol(data);
  instance.udp.send(cmd);
};