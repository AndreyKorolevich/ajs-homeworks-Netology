import Move from '../domain/Move'

test('create new Move', () => {
  const move = new Move(1009, 'Avengers', 'Marvel', 2012, 'USA',
    'Avengers Assemble', 'action move', 137, 10);

  expect(move).toEqual({
    id: 1009,
    name: 'Avengers',
    author: 'Marvel',
    year: 2012,
    country: 'USA',
    slogan: 'Avengers Assemble',
    genre: 'action move',
    time: 137,
    price: 10
  });
});

