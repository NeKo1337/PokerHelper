const randomize = require('./randomInteger');

const fill = (array, pool) => {
  if (pool === 0) return [];
  const deckArray = [];
  for (let i = 0; i < pool; i += 1) {
    deckArray.push(array.splice(randomize(0, array.length - 1), 1));
  }
  const finalArr = deckArray.reduce((a, b) => a.concat(b));
  return finalArr;
};

module.exports = fill;
