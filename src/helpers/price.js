import { randomRange, percentageToDecimal } from './numbers.js';
import { mapTo, rest, first } from './array.js';

const formatPrice = ({ currency, amount }) => {
  /* Use undefined locale which will default to browsers current */
  let locale;
  return new Intl.NumberFormat(locale, {style: 'currency', currency: currency}).format(amount)
}
const randomPriceRange = ({ low, high }) => {
  return {currency: 'USD', amount: randomRange(low, high)}  
}
const add = (...prices) => 
  rest(prices).reduce((acc, price) => ({currency: acc.currency, amount: acc.amount + price.amount}), first(prices));

const multiply = (...prices) => 
  rest(prices).reduce((acc, price) => ({currency: acc.currency, amount: acc.amount * price.amount}), first(prices));

const randomPrice = () => randomPriceRange({low: 2, high: 59});

const generatePriceGroup = ({price, conditionalPricing}) => {
  price = price ?? randomPrice();
  
  const conditionPrice = (condition) => {
    return multiply(price, {amount: percentageToDecimal(conditionalPricing[condition])})
  }
  
  return mapTo(Object.keys(conditionalPricing), conditionPrice);
}

export { formatPrice, randomPriceRange, randomPrice, generatePriceGroup }
  