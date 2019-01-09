/* eslint-disable jest/no-disabled-tests */
const findBiggerComb = require('../lookingForCombs/findBiggerComb');
// const testData = require('./testData');
const make = require('../datagen v 2.0/iLoveSwitches');
// const compare = require('../lookingForCombs/findCombination');
const findRoyalStraight = require('../lookingForCombs/checkFlush/isRoyalStraight');
const findStraightFlush = require('../lookingForCombs/checkFlush/isStraightFlush');
const findSimpleFlush = require('../lookingForCombs/checkFlush/isSimpleFlush');
const findSimpleStraight = require('../lookingForCombs/checkStraight/isSimpleStraight');
const findPair = require('../lookingForCombs/checkPairs/isPair');
const findTwoPairs = require('../lookingForCombs/checkPairs/isTwoPairs');
const findThree = require('../lookingForCombs/checkPairs/isThree');
const findFour = require('../lookingForCombs/checkPairs/isFour');
const findFullhouse = require('../lookingForCombs/checkPairs/isFullhouse');
const makeMagic = require('../utilities/makeMagic');
const makeNoComb = require('../datagen v 2.0/makeSome/makeNoCombinations');

describe('poker Helper', () => {
  describe('testing findPairsCombs block', () => {
    test('1) should return pair', () => {
      expect(findPair(make('pair'))).toBeTruthy();
    });

    test('2) should return two pairs', () => {
      expect(findTwoPairs(make('two pairs'))).toBeTruthy();
    });

    test('3) should return three of a kind', () => {
      expect(findThree(make('three'))).toBeTruthy();
    });

    test('4) should return fourth of a kind', () => {
      expect(findFour(make('four'))).toBeTruthy();
    });

    test('5) should return fullhouse', () => {
      expect(findFullhouse(make('fullhouse'))).toBeTruthy();
    });
  });


  describe('testind findFlushCombs block', () => {
    test('6) should return flush', () => {
      expect(findSimpleFlush(make('flush'))).toBeTruthy();
    });

    test('7) should return straight flush ', () => {
      expect(findStraightFlush(make('straightflush'))).toBeTruthy();
    });

    test('8) should return royal flush', () => {
      expect(findRoyalStraight(make('royalflush'))).toBeTruthy();
    });
  });

  describe('testing findSimpleStraight block', () => {
    test('9) should return straight', () => {
      expect(findSimpleStraight(make('straight'))).toBeTruthy();
    });
  });

  describe('testing no combinations (older card)', () => {
    test('10) should return no combinations', () => {
      expect(findBiggerComb(makeMagic(makeNoComb()))).toBe('Older card');
    });
  });
});
