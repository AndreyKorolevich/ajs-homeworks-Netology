import player from '../app';

test('comparison number', () => {
  const result = player({name: 'Маг', health: 90});

  expect(result).toBe('healthy');
});

test('comparison number', () => {
  const result = player({name: 'Маг', health: 50.01});

  expect(result).toBe('healthy');
});

test('comparison number', () => {
  const result = player({name: 'Маг', health: 50});

  expect(result).toBe('wounded');
});

test('comparison number', () => {
  const result = player({name: 'Маг', health: 49.99});

  expect(result).toBe('wounded');
});

test('comparison number', () => {
  const result = player({name: 'Маг', health: 35});

  expect(result).toBe('wounded');
});

test('comparison number', () => {
  const result = player({name: 'Маг', health: 15.01});

  expect(result).toBe('wounded');
});

test('comparison number', () => {
  const result = player({name: 'Маг', health: 15});

  expect(result).toBe(undefined);
});

test('comparison number', () => {
  const result = player({name: 'Маг', health: 14.99});

  expect(result).toBe('critical');
});

test('comparison number', () => {
  const result = player({name: 'Маг', health: 8});

  expect(result).toBe('critical');
});

test('comparison number', () => {
  const result = player({name: 'Маг', health: 0});

  expect(result).toBe('critical');
});

