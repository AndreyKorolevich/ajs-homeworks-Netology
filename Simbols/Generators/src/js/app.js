export default class Team {
  constructor(...characters) {
    characters.forEach((char) => {
      this[char.type] = char;
    });
  }

  * [Symbol.iterator]() {
    const keys = Object.keys(this);
    for (let i = 0; i < keys.length; i++) yield this[keys[i]];
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


for (const person of team) {
  console.log(person);
}
