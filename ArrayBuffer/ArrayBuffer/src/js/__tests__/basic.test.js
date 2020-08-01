import ArrayBufferConverter from '../app';

test('should load data', () => {
  const result = ArrayBufferConverter.load('Hello');
  expect(result.byteLength).toEqual(10);
});

test('should string', () => {
  const array = ArrayBufferConverter.load('Hello');
  const result = ArrayBufferConverter.toString(array)
  expect(result).toEqual('Hello');
});

