export const attack = (obj) => {
  const result = [];
  for(let i = 0; i < obj.special.length; i++) {   
    let {id, name, icon, description = 'Описание недоступно'} = obj.special[i];
    result.push({id,name, icon, description})
  }
  return result
}

  console.log(attack({
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
}))
