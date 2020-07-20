import {Character, Bowman, Swordsman, Magician, Daemon, Zombie, Undead} from '../app.js';

test('object Character type Bowman', () => {
  const result = new Character('name', 'Bowman', 10, 10);

  expect(result).toEqual({
    type: 'Bowman',
    name: 'name',
    health: 100,
    level: 1,
    attack: 10,
    defence: 10
  });
});

test('object Character type Swordsman', () => {
  const result = new Character('name', 'Swordsman', 10, 10);

  expect(result).toEqual({
    type: 'Swordsman',
    name: 'name',
    health: 100,
    level: 1,
    attack: 10,
    defence: 10
  });
});

test('object Character type Magician', () => {
  const result = new Character('name', 'Magician', 10, 10);

  expect(result).toEqual({
    type: 'Magician',
    name: 'name',
    health: 100,
    level: 1,
    attack: 10,
    defence: 10
  });
});

test('object Character type Daemon', () => {
  const result = new Character('name', 'Daemon', 10, 10);

  expect(result).toEqual({
    type: 'Daemon',
    name: 'name',
    health: 100,
    level: 1,
    attack: 10,
    defence: 10
  });
});

test('object Character type Undead', () => {
  const result = new Character('name', 'Undead', 10, 10);

  expect(result).toEqual({
    type: 'Undead',
    name: 'name',
    health: 100,
    level: 1,
    attack: 10,
    defence: 10
  });
});

test('object Character type Zombie', () => {
  const result = new Character('name', 'Zombie', 10, 10);

  expect(result).toEqual({
    type: 'Zombie',
    name: 'name',
    health: 100,
    level: 1,
    attack: 10,
    defence: 10
  });
});


test('object Character invalid name', () => {
    expect(() => {
      new Character(n, 'Zombie', 10, 10)
    }).toThrow();
});


test('object Character short name', () => {

  expect(() => {
    new Character('s', 'Zombie', 10, 10)
  }).toThrow();
});

test('object Character long name', () => {

  expect(() => {
    new Character('sаfffffffff', 'Zombie', 10, 10)
  }).toThrow();
});

test('object Character invalid type', () => {

  expect(() => {
    new Character('name', 'Zo', 10, 10)
  }).toThrow();
});

test('object Bowman', () => {
  const result = new Bowman('name');

  expect(result).toEqual({
    type: 'Bowman',
    name: 'name',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  });
});

test('object Swordsman', () => {
  const result = new Swordsman('name');

  expect(result).toEqual({
    type: 'Swordsman',
    name: 'name',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
  });
});

test('object Daemon', () => {
  const result = new Daemon('name');

  expect(result).toEqual({
    type: 'Daemon',
    name: 'name',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  });
});

test('object Undead', () => {
  const result = new Undead('name');

  expect(result).toEqual({
    type: 'Undead',
    name: 'name',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  });
});

test('object Zombie', () => {
  const result = new Zombie('name');

  expect(result).toEqual({
    type: 'Zombie',
    name: 'name',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
  });
});

test('object Magician', () => {
  const result = new Magician('name');

  expect(result).toEqual({
    type: 'Magician',
    name: 'name',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  });
});

test('method levelUp', () => {
  const result = new Magician('name', 'Magician');
  result.levelUp();
  expect(result).toEqual({
    type: 'Magician',
    name: 'name',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48
  });
});

test('method damage', () => {
  const result = new Magician('name', 'Magician');
  result.damage(30);
  expect(result).toEqual({
    type: 'Magician',
    name: 'name',
    health: 82,
    level: 1,
    attack: 10,
    defence: 40
  });
});

test('Character dead', () => {
  const result = new Character('name', 'Magician', 10, 10, 0);

  expect(() => {result.levelUp()}).toThrowError('You`re dead');
});

test('Character damage', () => {
  const result = new Character('name', 'Magician', 10, 10, 0);

  expect(() => {result.damage(100)}).toThrowError('You`re dead');
});
