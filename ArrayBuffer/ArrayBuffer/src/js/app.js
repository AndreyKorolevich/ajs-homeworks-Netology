export default class ArrayBufferConverter {
  static load(data) {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < data.length; i++) {
      bufferView[i] = data.charCodeAt(i);
    }
    return buffer;
  }

  static toString(arrayBuffer) {
    const bufferView = new Uint16Array(arrayBuffer);
    let result = '';
    for (let i = 0; i < bufferView.length; i++) {
      result += String.fromCharCode(bufferView[i]);
    }
    return result;
  }
}

const array = ArrayBufferConverter.load('Hello');
const result = new Uint16Array(array);
console.log(new Uint8Array(result));
console.log(ArrayBufferConverter.toString(result));
