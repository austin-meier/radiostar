const randomRange = (low, high) => 
  Math.floor(Math.random() * (high - low) + low);

const percentageToDecimal = (p) => p/100;

export { randomRange, percentageToDecimal }