export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    const sizeSet = this.members.size;
    this.members.add(character);
    if (sizeSet === this.members.size) {
      throw new Error('The value isn`t unique');
    }
  }

  addAll(...characters) {
    characters.forEach((elem) => this.members.add(elem));
  }

  toArray() {
    this.members = [...this.members];
  }
}

const a = {
  name: 'andrey',
};

const b = {
  name: 'kristina',
};

const c = {
  name: 'Stas',
};
const team = new Team();

team.add(a);
team.addAll(b, c, b);


console.log(team);
