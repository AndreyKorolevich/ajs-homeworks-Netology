import reader from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return reader()
      .then((res) => res)
      .then((res) => json(res))
      .then((res) => JSON.parse(res));
  }
}

GameSavingLoader.load().then((saving) => {
  console.log(saving);
}, (error) => {
  console.error(error);
});
