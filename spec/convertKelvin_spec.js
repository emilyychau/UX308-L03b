import { convertKelvin2Fahrenheit } from "../convertKelvin2Fahrenheit.js";

describe("test convertKelvin2Fahrenheit", function(){
    it("tests 0º kelvin", function(){
        let kelvin = 0;
        let fahrenheit = convertKelvin2Fahrenheit(kelvin);
    expect(fahrenheit.toFixed(2)).toBe("-459.67");
    });

    it("tests 450º kelvin", function(){
        let kelvin = 450;
        let fahrenheit = convertKelvin2Fahrenheit(kelvin);
    expect(fahrenheit.toFixed(2)).toBe("350.33");
    });

    it("tests 275º kelvin", function(){
        let kelvin = 275;
        let fahrenheit = convertKelvin2Fahrenheit(kelvin);
    expect(fahrenheit.toFixed(2)).toBe("35.33");
    });
})