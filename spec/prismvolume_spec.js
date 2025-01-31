import { TriangularPrismVol } from "../TriangularPrismVol.js";
describe("test TriangularPrismVol", function(){
    it("test volume of a triangular prism with a base of 5m and a length of 10m", function(){
        let base = 5;
        let length = 10;
        let volume = TriangularPrismVol(base, length);
    expect(volume.toFixed(2)).toBe("108.25");
    })
    it("test volume of a triangular prism with a base of 2m and a length of 5m", function(){
        let base = 2;
        let length = 5;
        let volume = TriangularPrismVol(base, length);
    expect(volume.toFixed(2)).toBe("8.66");
    })
    it("test volume of a triangular prism with a base of 8m and a length of 8m", function(){
        let base = 8;
        let length = 8;
        let volume = TriangularPrismVol(base, length);
    expect(volume.toFixed(2)).toBe("221.70");
    })
});