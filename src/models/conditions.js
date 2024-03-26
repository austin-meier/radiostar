import { randomValue } from '../helpers/object.js';

const Condition = {
  LOOSE: 'loose',
  COMPLETE: 'complete',
  NEW: 'new',
  GRADED: 'graded'
}

const BaseConditionalPricing = {
  'graded': 120,
  'new': 100,
  'complete': 70,
  'loose': 40,
}

const randomCondition = () => randomValue(Condition);

export { Condition, BaseConditionalPricing, randomCondition }