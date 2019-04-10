const { repair } = require('./enhancer.js');
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
      const expected = {
        name: 'strider', durability: 100, enhancement: 15
      };

      // act
      const repairedItem = repair(item);

      // assert
      expect(repairedItem).toEqual(expected);
    });

    //what happens when we try to break it
    it('it should return null when called with no arguments', () => {
      // arrange
      const expected = null;

      // act
      const actual = repair();

      // assert
      expect(actual).toBe(expected);
    })

    it('it should return null or undefined when not passed a valid object', () => {
      const improperObject = {
        name: 'Thor',
        speed: 50,
        enhancement: 15
      }

      //expect(repair([1])).toBe(expected);
      expect(repair(1)).toBeNull();
      expect(repair("a")).toBeNull();
      expect(repair(improperObject)).toBeUndefined();
      expect(repair([])).toBeUndefined();
    })
   })
 })
