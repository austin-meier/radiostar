import { randomRange } from './numbers.js'

const randnth = (arr) => arr[randomRange(0, arr.length)];

/* Takes an array of values, applies a fn to then and returns a map
   where the original value is a key and the transformed value is the value
*/
const mapTo = (arr, fn) => {
  return arr.reduce((acc, v) => {
    acc[v] = fn(v);
    return acc;
  }, {})
}

const first = (arr) => {
  return arr[0];
}

const rest = (arr) => {
  return arr.slice(1);
}


export { randnth, mapTo, first, rest }