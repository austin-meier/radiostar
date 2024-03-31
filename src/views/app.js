import { div } from '../helpers/dom.js';
import { GameGrid } from './game/gamegrid.js';
import { nav } from './ui/nav.js';

const app = (...props) => {
  return (
    div(
      nav(),
      GameGrid({ games: game.random(100) })
    )
  )
}

export { app }
