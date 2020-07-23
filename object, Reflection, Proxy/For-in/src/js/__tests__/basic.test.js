import {sortObj} from '../app';

test('should sort', () => {
  const result = sortObj({
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40
  }, ['health', 'name']);

  expect(result).toEqual([{key: "health", value: 10},
    {key: "name", value: "мечник"},
    {key: "attack", value: 80},
    {key: "defence", value: 40},
    {key: "level", value: 2}]);
});

test('should sort', () => {
  const result = sortObj({
    name: 'мечник',
    health: 10,
    attack: 50,
    defence: 2,
    level: 80,

  }, ['health', 'name']);

  expect(result).toEqual([{key: "health", value: 10},
    {key: "name", value: "мечник"},
    {key: "attack", value: 50},
    {key: "defence", value: 2},
    {key: "level", value: 80}]);
});
