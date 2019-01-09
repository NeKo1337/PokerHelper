const express = require('express');
const bodyParser = require('body-parser');
const findBiggerComb = require('./lookingForCombs/findBiggerComb');
// const make = require('./datagen v 2.0/iLoveSwitches');
// const compare = require('./lookingForCombs/findCombination');
// const findRoyalStraight = require('./lookingForCombs/checkFlush/isRoyalStraight');
// const findStraightFlush = require('./lookingForCombs/checkFlush/isStraightFlush');
// const findSimpleFlush = require('./lookingForCombs/checkFlush/isSimpleFlush');
// const findSimpleStraight = require('./lookingForCombs/checkStraight/isSimpleStraight');
// const findPair = require('./lookingForCombs/checkPairs/isPair');
// const findTwoPairs = require('./lookingForCombs/checkPairs/isTwoPairs');
// const findThree = require('./lookingForCombs/checkPairs/isThree');
// const findFour = require('./lookingForCombs/checkPairs/isFour');
// const findFullhouse = require('./lookingForCombs/checkPairs/isFullhouse');
const makeMagic = require('./utilities/makeMagic');
const makeNoComb = require('./datagen v 2.0/makeSome/makeNoCombinations');


const app = express();

app.use(bodyParser.json());

app.post('/getHigherCombination', (req, res) => {
  // const higherCombination = compare(findSimpleFlush(make('flush')));
  const higherCombination = findBiggerComb(makeMagic(makeNoComb()));
  res.send(higherCombination);
});

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('app is initialized and listening on 3000 port'));
