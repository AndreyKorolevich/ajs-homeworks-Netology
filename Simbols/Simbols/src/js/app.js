export default class Team {
  constructor(...characters) {
    characters.forEach((char) => {
      this[char.type] = char;
    });
  }
}

const team = new Team({
  name: 'Лучник', type: 'Bowman1', health: 50, level: 1, attack: 40, defence: 10,
},
{
  name: 'Лучник', type: 'Bowman2', health: 50, level: 1, attack: 40, defence: 10,
},
{
  name: 'Лучник', type: 'Bowman3', health: 50, level: 1, attack: 40, defence: 10,
});


team[Symbol.iterator] = function () {
  const keys = Object.keys(this);
  const current = keys.length;
  let last = 0;
  const obj = this;
  return {
    next() {
      if (current > last) {
        last++;
        return {
          done: false,
          value: obj[keys[last - 1]],
        };
      }
      return {
        done: true,
      };
    },
  };
};

for (const person of team) {
  console.log(person);
}
