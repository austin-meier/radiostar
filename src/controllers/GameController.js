import { Game } from '../models/game.js';
import { take, repeatedly } from '../helpers/function.js'

class GameController {
  /* The database that the GameController will pull from */
  database;

  constructor({ database }) {
    this.database = database;
  }

  async getGames() {
    return await this.database.getGames();
  }


  static random(n) {
    if (n)
      return take(n, repeatedly(() => new Game({})))
    return new Game({})
  }
}

export { GameController }