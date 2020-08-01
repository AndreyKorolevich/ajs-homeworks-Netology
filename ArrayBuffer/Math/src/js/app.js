export class Magician {
  constructor(stoned, attack) {
    this.stoned = stoned;
    this.attack = attack;
  }

  get stonedM() {
    return this.stoned;
  }

  set stonedM(value) {
    this.stoned = value;
  }

  get attackM() {
    return this.attack;
  }

  set attackM(distance) {
    this.attack = this.attack * (1 - ((distance - 1) / 10))
    if (this.stoned) {
      this.attack = this.attack - Math.log2(distance) * 5;
    }
  }
}

export class Daemon extends Magician {}


const daemon = new Daemon(false, 100);

daemon.stonedM = true;
daemon.attackM = 2;

console.log(daemon.attackM)
