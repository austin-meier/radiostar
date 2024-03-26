const repeatedly = function* (fn) {
  while(true) yield fn();
}

const take = (amount, fn) => {
  let result = [];
  for(let i=0; i < amount; i++) {
    result.push (isGenerator(fn) ? fn.next().value : fn())
  }
  return result;
}

const isGenerator = (fn) => fn.constructor.constructor.name === 'GeneratorFunction';

const memoize = (fn) => {
  const cache = {};

  return (...args) => {
    const key = JSON.stringify(args);

    if (cache[key]) {
      return cache[key];
    }

    const result = fn.apply(this, args);
    cache[key] = result;

    return result;
  };
}

export { repeatedly, take, memoize }