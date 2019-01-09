const prepareCardsPool = require('../../utilities/prepareCardsPool');
const isFlush = require('./isSimpleFlush');

const findStraightFlush = (cardsArray) => {
  const prepCardsArray = prepareCardsPool(cardsArray, 'suit');

  if (isFlush(cardsArray)) {
    const flushArray = cardsArray.filter(card => card.suit === prepCardsArray[0].suit);
    flushArray.sort((prev, next) => next.value - prev.value);
    if (flushArray[0].value - flushArray[4].value === 4) return true;
  }
  return false;
};

module.exports = findStraightFlush;
