export class Validator {

  static validateUsername(name) {
      const first =  /^[^\d_-][\w-]+[^\d_-]$/gi.test(name);
      const second = name.match(/[0-9]{4}/);
      return first && (second === null)
  }
}

console.log(Validator.validateUsername('sfd_345-34-345sdf'))
