import { MockDatabase } from './dependencies/MockDatabase/MockDatabase.js';
import { GameController } from './controllers/GameController.js';
import { layout } from './views/layout.js';

const initialize = (element) => {
  window.game = GameController;
  window.games = new GameController({
    database: new MockDatabase()
  });

  element.replaceChildren(layout());

}


/* Initialize the game on the app div */
const appElement = document.getElementById('app');
initialize(appElement);