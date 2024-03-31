import { MockDatabase } from './dependencies/MockDatabase/MockDatabase.js';
import { GameController } from './controllers/GameController.js';
import { app } from './views/app.js';

const initialize = (element) => {
  window.game = GameController;
  window.games = new GameController({
    database: new MockDatabase()
  });

  element.replaceChildren(app());

}


/* Initialize the game on the app div */
const appElement = document.getElementById('app');
initialize(appElement);
