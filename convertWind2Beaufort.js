// q2 convert a wind speed to  a description using The Beaufort Wind Scale
// Beaufort 0 is described as "calm", less than 2km/h
// Beaufort 1 is described as "light air", between 2-5 km/h
// Beaufort 2 is described as "light breeze", between 6-11km/h
// Beaufort 3 is described as "gentle breeze", between 12-19km/h
// Beaufort 4 is described as "moderate breeze", between 20-28km/h
// Beaufort 5 is described as "fresh breeze", between 29-38km/h
// Beaufort 6 is described as "strong breeze", between 39-49km/h
// Beaufort 7 is described as "high wind/moderate gale/near gale", between 50-61km/h
// Beaufort 8 is described as "gale/fresh gale", between 62-74km/h
// Beaufort 9 is described as "strong/severe gale", between 75-88km/h
// Beaufort 10 is described as "storm/whole gale", between 89-102km/h
// Beaufort 11 is described as "violent storm", between 103-117km/h
// Beaufort 12 is described as "hurricane force", above 118 km/h

function convertWind2Beaufort(windspeed){
    let sDescription;
    if(windspeed <= 2){
        sDescription = "Calm, Beaufort number 0";
    }
    else if(windspeed >= 2 && windspeed <= 5){
        sDescription = "Light air, Beaufort number 1";
    }
    else if (windspeed >= 6 && windspeed <= 11){
        sDescription = "Light breeze, Beaufort number 2";
    }
    else if (windspeed >= 12 && windspeed <= 19){
        sDescription = "Gentle breeze, Beaufort number 3";
    }
    else if (windspeed >= 20 && windspeed <= 28){
        sDescription = "Moderate breeze, Beaufort number 4";
    }
    else if (windspeed >= 29 && windspeed <= 38){
        sDescription = "Fresh breeze, Beaufort number 5";
    }
    else if (windspeed >= 39 && windspeed <= 49){
        sDescription = "Strong breeze, Beaufort number 6";
    }
    else if (windspeed >= 50 && windspeed <= 61){
        sDescription = "High wind, moderate gale, or near gale, Beaufort number 7";
    }
    else if (windspeed >= 62 && windspeed <= 74){
        sDescription = "Gale/fresh gale, Beaufort number 8";
    }
    else if (windspeed >= 75 && windspeed <= 88){
        sDescription = "Strong/severe gale, Beaufort number 9";
    }
    else if (windspeed >= 89 && windspeed <= 102){
        sDescription = "Storm/whole gale, Beaufort number 10";
    }
    else if (windspeed >= 103 && windspeed <= 117){
        sDescription = "Violent storm, Beaufort number 11";
    }
    else if (windspeed >= 118){
        sDescription = "Hurricane force, Beaufort number 12";
    }
return sDescription;
}

export {convertWind2Beaufort}