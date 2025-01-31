// q1 given a temperature in kelvin convert to fahrenheit

function convertKelvin2Fahrenheit(kelvin){
    let fahrenheit = 1.8 * (kelvin - 273.15) + 32
    return fahrenheit;
}

export {convertKelvin2Fahrenheit}