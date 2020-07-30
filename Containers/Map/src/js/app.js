export default class ErrorRepository {
  constructor(...args) {
    this.errors = new Map(args);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }
}

const errorRepository = new ErrorRepository([403, 'Error1'], [404, 'Error2']);
console.log(errorRepository.translate(405));
