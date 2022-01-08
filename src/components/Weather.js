import * as React from 'react';
import RollDice from 'DiceRoller';

function generateWeather(tempD20, windD20, precipiationD20) {

    var temperatureValue = "Normal for the season"
    var windValue = "None"
    var precipitationValue = "None"
    //Temp

    switch (tempD20) {
        case 15:
        case 16:
        case 17:
            temperatureValue = "1d4 × 10 degrees Fahrenheit colder than normal";
            break;
        case 18:
        case 19:
        case 20:
            temperatureValue = "1d4 × 10 degrees Fahrenheit hotter than normal";
            break;

        default:
            break;
    }


        
    switch (windD20) {
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
            windValue = "Light";
            break;
        case 18:
        case 19:
        case 20:
            windValue = "Strong";
            break;

        default:
            break;
    }






    switch (precipiationD20) {
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
            precipitationValue = "Light rain or light snowfall";
            break;
        case 18:
        case 19:
        case 20:
            precipitationValue = "Heavy rain or heavy snowfall";
            break;

        default:
            break;
    }


    return "Temp: " + temperatureValue +  " Wind: " + windValue  + " Precipitation: " + precipitationValue

}



export default function GenerateWeather() {
    return (generateWeather(RollDice("d20", 0, 0), RollDice("d20", 0, 0), RollDice("d20", 0, 0))
    );
}
