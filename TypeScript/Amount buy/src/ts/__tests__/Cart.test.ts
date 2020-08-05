import Cart from '../service/Cart';
import Book from "../domain/Book";
import MusicAlbum from "../domain/MusicAlbum";
import Move from "../domain/Move";

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('should cost', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Move(1009, 'Avengers', 'Marvel', 2012, 'USA',
    'Avengers Assemble', 'action move', 137, 10));
  const result = cart.cost();

  expect(result).toBe(2910);
});

test('should cost with discount', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Move(1009, 'Avengers', 'Marvel', 2012, 'USA',
    'Avengers Assemble', 'action move', 137, 10));
  const result = cart.costDiscount(50);

  expect(result).toBe(1455);
});

test('should delete element', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Move(1009, 'Avengers', 'Marvel', 2012, 'USA',
    'Avengers Assemble', 'action move', 137, 10));
   cart.deleteBuy(1009);

  expect(cart.items).toEqual([{id: 1001, name: 'War and Piece', author: 'Leo Tolstoy', price: 2000, pages: 1225},
    {id: 1008, name: 'Meteora', author: 'Linkin Park', price: 900}]);
});
