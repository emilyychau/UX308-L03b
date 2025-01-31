import { hello } from '../hello.js'

describe("A suite", function() {
    it("contains spec with an expectation", function() {
      let sHello = hello();
      expect(sHello).toBe("hello");
    });
  });
  
  