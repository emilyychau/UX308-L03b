import { convertWind2Beaufort } from "../convertWind2Beaufort.js";

describe("test convertWind2Beaufort", function(){
    it("tests 20 km/h windspeed", function(){
        let windspeed = 20;
        let sDescription = convertWind2Beaufort(windspeed);
    expect(sDescription).toBe("Moderate breeze, Beaufort number 4");
    });

    it("tests 65 km/h windspeed", function(){
        let windspeed = 65;
        let sDescription = convertWind2Beaufort(windspeed);
    expect(sDescription).toBe("Gale/fresh gale, Beaufort number 8");
    });

    it("tests 125 km/h windspeed", function(){
        let windspeed = 125;
        let sDescription = convertWind2Beaufort(windspeed);
    expect(sDescription).toBe("Hurricane force, Beaufort number 12");
    });
});