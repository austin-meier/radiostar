import { randomRange } from './numbers.js'

const randomKey = (obj) => {
  const keys = Object.keys(obj);
  const randomKeyIdx = randomRange(0, keys.length);
  return keys[randomKeyIdx];
}

const randomValue = (obj) => obj[randomKey(obj)];

export { randomKey, randomValue }