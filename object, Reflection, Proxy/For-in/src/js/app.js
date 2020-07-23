export const sortObj = (obj, [...args]) => {
  const result = [];
  const arrRem = [];
  for (let i = 0; i < args.length; i++) {
    for (let key in obj) {
      if (args[i] === key) {
        result.push({
          key,
          value: obj[key]
        })
        delete obj[key]
      }
    }
  }

  for (let key in obj) {
    arrRem.push({
      key,
      value: obj[key]
    })
  }
  arrRem.sort((a, b) => {
    const nameA = a.key.toLowerCase(), nameB = b.key.toLowerCase();
    if (nameA > nameB)
      return 1
    if (nameA < nameB)
      return -1
  })
    return ([...result, ...arrRem])
}

const result = sortObj({
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40
}, ['health', 'name'])

console.log(result)
