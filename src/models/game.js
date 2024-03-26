import { randomGame } from '../dependencies/random-game.js';
import { Condition } from './conditions.js';
import { randomValue } from '../helpers/object.js';
import { randomReleaseDate } from '../helpers/date.js';
import { generatePriceGroup } from '../helpers/price.js';
import { Volatility} from './enums.js';
import { BaseConditionalPricing } from './conditions.js';

const VolatilityPercentage = {
  'low': 12,
  'medium': 23,
  'high': 46
}

class Game {
  name;
  releaseDate;
  condition;
  pricing;
  volatility;

  constructor({ id, name, condition, releaseDate, pricing, volatility, image }) {
    /* Attempt to provide sensible defaults but we update or change later */
    let rGame;
    
    if (!name || !title)
      rGame = randomGame();
    
    this.id = id ?? crypto.randomUUID();
    this.title = name ?? rGame.name;
    this.releaseDate = releaseDate ?? randomReleaseDate();
    this.condition = condition ?? randomValue(Condition);
    this.volatility = volatility ?? randomValue(Volatility);
    this.pricing = pricing ?? generatePriceGroup({conditionalPricing: BaseConditionalPricing});
    this.image = image ?? `https://images.launchbox-app.com/${rGame.url}`;
  }

  static generateListingPrice({}) {}
}

export { Game }