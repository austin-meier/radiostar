import { Game } from './game.js';
import { div } from '../../helpers/dom.js';

const GameGrid = ({ games }) => {
  const gameElements = games.map(Game);
  return (
    div(
      ...gameElements
    ).class('grid grid-cols-4')
  )

};

export { GameGrid }