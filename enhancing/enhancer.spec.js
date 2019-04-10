const { repair, succeed, fail } = require("./enhancer.js");
// test away!
// test suite
describe("the game Succeed/Fail/Repair module", () => {
  // test suite

  // REPAIR MODEL TEST
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

  // SUCCEED MODEL TEST
  describe("the succeed module", () => {
    it("should raise enhancement by 1", () => {
      const item = {
        name: "Black Widow",
        durability: 85,
        enhancement: 15
      };

      // arrange
      const expected = {
        name: "Black Widow",
        durability: 85,
        enhancement: 16
      };

      // act
      const enhancedItem = succeed(item);

      // assert
      expect(enhancedItem).toEqual(expected);
    });

    it("it should return undefined when called with no arguments", () => {
      expect(succeed()).toBeNull();
    });

    it("should return the item passed if not in the proper format", () => {
      const improperObject = {
        name: "Thor",
        speed: 50,
        enhancement: 15
      };

      expect(succeed(improperObject)).toBeUndefined();
      expect(succeed(1)).toBeNull();
      expect(succeed("abc")).toBeNull();
    });

    it("should not increase enhancement if already at 20", () => {
      const testObject = {
        name: "Thor",
        durability: 99,
        enhancement: 20
      };
      expect(succeed(testObject)).toEqual(testObject);
    });
  });

  // FAIL MODULE TEST
  describe('the fail module', () => {
    it('should decrease the durability by 5 if the existing enhance value is less than 15', () => {
      const testItem = {
        name: "Black Wizard",
        durability: 75,
        enhancement: 14
      }

      const returnItem = {
        name: "Black Wizard",
        durability: 70,
        enhancement: 14
      }

      expect(fail(testItem)).toEqual(returnItem)
    })

    it('should decrease the enhancement by 1 if the existing enhance value is greater than 16', () => {
      const testItem = {
        name: "Black Panther",
        durability: 75,
        enhancement: 17
      }

      const returnItem = {
        name: "Black Panther",
        durability: 65,
        enhancement: 16
      }

      expect(fail(testItem)).toEqual(returnItem)
    })

    it('should decrease the durability by 10 if the existing enhancement value is greater than 14', () => {
      const testItem = {
        name: "Black Panther",
        durability: 75,
        enhancement: 15
      }

      const returnItem = {
        name: "Black Panther",
        durability: 65,
        enhancement: 15
      }

      expect(fail(testItem)).toEqual(returnItem)
    })

    it("it should return null or undefined when not passed a valid object", () => {
      const improperObject = {
        name: "Thor",
        speed: 50,
        enhancement: 15
      };

      //expect(repair([1])).toBe(expected);
      expect(fail(1)).toBeNull();
      expect(fail("a")).toBeNull();
      expect(fail(improperObject)).toBeUndefined();
      expect(fail([])).toBeUndefined();
    });

    it("it should return null when called with no arguments", () => {
      // assert
      expect(fail()).toBeNull();
    });
  })
});
