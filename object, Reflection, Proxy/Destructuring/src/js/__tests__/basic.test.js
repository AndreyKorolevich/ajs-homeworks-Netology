import {attack} from '../app';

test('should array', () => {
  const result = attack({
    name: 'Лучник',
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      }, 
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
      }
    ]	
  });

  expect(result).toEqual([{id: 8, name: "Двойной выстрел", icon: "http://...", description: "Двойной выстрел наносит двойной урон"},
  {id: 9, name: "Нокаутирующий удар", icon: "http://...", description: "Описание недоступно"}]);
});
