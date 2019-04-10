const enhancer = require('./enhancer.js');
// test away!
// test suite
describe('the game Succeed/Fail module', () => {
  // test suite
  describe('the repair module', () => {
    // test
    it('should restore durability to 100', () => {
      const item = {
        name: 'strider', durability: 85, enhancement: 15
      }
 
      // arrange
      const expected = 100;

      // act
      const repairedItem = enhancer.repair(item);

      // assert
      expect(repairedItem.durability).toBe(expected);
    });

    //what happens when we try to break it
    it('it should return null when called with no arguments', () => {
      // arrange
      const expected = null;

      // act
      const actual = enhancer.repair();

      // assert
      expect(actual).toBe(expected);
    })

//     it('it should return the value when called with a single argument', () => {
//       expect(add(2)).toBe(2);
//       expect(add(-9)).toBe(-9);
//     })
   })
 })
