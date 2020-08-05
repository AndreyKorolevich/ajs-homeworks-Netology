import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Move from './domain/Move'

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Move(1009, 'Avengers', 'Marvel', 2012, 'USA',
  'Avengers Assemble', 'action move', 137, 10));

console.log(cart.items);
