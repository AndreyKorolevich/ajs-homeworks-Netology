import player from '../app';

test('who healthier', () => {
  const result = player([{ name: 'мечник', health: 10 }, { name: 'маг', health: 100 }, { name: 'лучник', health: 80 }]);
  expect(result).toEqual([{ name: 'маг', health: 100 }, { name: 'лучник', health: 80 }, { name: 'мечник', health: 10 }]);
});

test('who healthier', () => {
  const result = player([{ name: 'мечник', health: 100 }, { name: 'маг', health: 80 }, { name: 'лучник', health: 10 }]);
  expect(result).toEqual([{ name: 'мечник', health: 100 }, { name: 'маг', health: 80 }, { name: 'лучник', health: 10 }]);
});

test('who healthier', () => {
  const result = player([{ name: 'мечник', health: 10 }, { name: 'лучник', health: 100 }, { name: 'маг', health: 80 }]);
  expect(result).toEqual([{ name: 'лучник', health: 100 }, { name: 'маг', health: 80 }, { name: 'мечник', health: 10 }]);
});

test('who healthier', () => {
  const result = player([{ name: 'мечник', health: 100 }, { name: 'лучник', health: 100 }, { name: 'маг', health: 100 }]);
  expect(result).toEqual([{ name: 'мечник', health: 100 }, { name: 'лучник', health: 100 }, { name: 'маг', health: 100 }]);
});

