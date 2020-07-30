import Team from '../app';

const a = {
  name: 'andrey',
};

const b = {
  name: 'kristina',
};

const c = {
  name: 'stas',
};

test('should add', () => {
  const team = new Team();
  team.add(a);
  expect(team.members).toEqual(new Set([{ name: 'andrey' }]));
});

test('should errror', () => {
  const team = new Team();
  team.add(a);
  expect(() => {
    team.add(a);
  }).toThrow();
});

test('should addAll', () => {
  const team = new Team();
  team.addAll(a, b, c);
  expect(team.members).toEqual(new Set([{ name: 'andrey' }, { name: 'kristina' }, { name: 'stas' }]));
});

test('should array', () => {
  const team = new Team();
  team.addAll(a, b, c);
  team.toArray();
  expect(team.members).toEqual(([{ name: 'andrey' }, { name: 'kristina' }, { name: 'stas' }]));
});
