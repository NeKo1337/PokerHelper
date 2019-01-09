const findCombination = require('./findCombination');
const findRoyalStraight = require('./checkFlush/isRoyalStraight');
const findStraightFlush = require('./checkFlush/isStraightFlush');
const findSimpleFlush = require('./checkFlush/isSimpleFlush');
const findSimpleStraight = require('./checkStraight/isSimpleStraight');
const findPair = require('./checkPairs/isPair');
const findTwoPairs = require('./checkPairs/isTwoPairs');
const findThree = require('./checkPairs/isThree');
const findFour = require('./checkPairs/isFour');
const findFullhouse = require('./checkPairs/isFullhouse');

const findBiggerComb = (cardsPool) => {
  const cardsArray = [...cardsPool.hand, ...cardsPool.table];
  const allCombinations = [
    0,
    findPair(cardsArray),
    findTwoPairs(cardsArray),
    findThree(cardsArray),
    findSimpleStraight(cardsArray),
    findSimpleFlush(cardsArray),
    findFullhouse(cardsArray),
    findFour(cardsArray),
    findRoyalStraight(cardsArray),
    findSimpleFlush(cardsArray),
    findStraightFlush(cardsArray),
    findRoyalStraight(cardsArray),
  ];

  let biggerComb = allCombinations.findIndex(el => el === true);
  if (biggerComb === -1) biggerComb = 0;

  return findCombination(biggerComb);
};

module.exports = findBiggerComb;
