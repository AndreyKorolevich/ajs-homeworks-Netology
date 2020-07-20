export class Character  {
  constructor(name, type, attack, defence, health = 100, level = 1){
      if((typeof name !== 'string') || (name.length < 2) || (name.length > 10)) {
        throw new Error('invalid values');
      }
      switch (type) {
        case 'Bowman':
          this.type = type;
          break;
        case 'Swordsman':
          this.type = type;
          break;
        case 'Magician':
          this.type = type;
          break;
        case 'Daemon':
          this.type = type;
          break;
        case 'Undead':
          this.type = type;
          break;
        case 'Zombie':
          this.type = type;
          break;
        default:
          throw new Error('invalid type');
      }
      this.name = name;
      this.health = health;
      this.level = level;
      this.attack = attack;
      this.defence = defence; 
    }

  levelUp() {
      if(this.health === 0){
        throw new Error('You`re dead');
      }
      this.level++;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
  }

  damage(points) {
      if(this.health <= 0){
        throw new Error('You`re dead');
      }
      this.health -= points * (1 - this.defence / 100)
  }
}

export class Bowman extends Character {
  constructor(name) {
    super(name, 'Bowman', 25, 25)
  }
}

export class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman', 40, 10)
  }
}

export class Magician extends Character {
  constructor(name) {
    super(name, 'Magician', 10, 40)
  }
}

export class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon', 10, 40)
  }
}

export class Undead extends Character {
  constructor(name) {
    super(name, 'Undead', 25, 25)
  }
}

export class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie', 40, 10)
  }
}
