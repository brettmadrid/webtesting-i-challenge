const { repair, succeed } = require("./enhancer.js");
// test away!
// test suite
describe("the game Succeed/Fail/Repair module", () => {
  // test suite
  describe("the repair module", () => {
    // test
    it("should restore durability to 100", () => {
      const item = {
        name: "strider",
        durability: 85,
        enhancement: 15
      };

      // arrange
      const expected = {
        name: "strider",
        durability: 100,
        enhancement: 15
      };

      // act
      const repairedItem = repair(item);

      // assert
      expect(repairedItem).toEqual(expected);
    });

    //what happens when we try to break it
    it("it should return null when called with no arguments", () => {
      // arrange
      const expected = null;

      // act
      const actual = repair();

      // assert
      expect(actual).toBe(expected);
    });

    it("it should return null or undefined when not passed a valid object", () => {
      const improperObject = {
        name: "Thor",
        speed: 50,
        enhancement: 15
      };

      //expect(repair([1])).toBe(expected);
      expect(repair(1)).toBeNull();
      expect(repair("a")).toBeNull();
      expect(repair(improperObject)).toBeUndefined();
      expect(repair([])).toBeUndefined();
    });
  });

  describe('the succeed module', () => {
    it('should raise enhancement by 1', () => {
      const item = {
        name: "Black Widow",
        durability: 85,
        enhancement: 15
      }

      // arrange
      const expected = {
        name: "Black Widow",
        durability: 85,
        enhancement: 16
      }

      // act
      const enhancedItem = succeed(item);

      // assert
      expect(enhancedItem).toEqual(expected);
    });

    it("it should return undefined when called with no arguments", () => {
      expect(succeed()).toBeNull();
    });

    it('should return the item passed if not in the proper format', () => {
      const improperObject = {
        name: "Thor",
        speed: 50,
        enhancement: 15
      };

      expect(succeed(improperObject)).toBeUndefined();
      expect(succeed(1)).toBeNull();
      expect(succeed("abc")).toBeNull();
    })
  })
});
