import { GameGrid } from './game/gamegrid.js';

const layout = (...children) => {
  return (GameGrid({ games: game.random(100) }))
}

export { layout }