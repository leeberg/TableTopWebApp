import * as React from 'react';


function determineRoll(diceType, modifier, advantageFactor) {

    var diceMin = 1;
    var diceMax = 6;

    if (diceType === "d4") {
        diceMax = 4;
    }
    if (diceType === "d6") {
        diceMax = 6;
    }
    if (diceType === "d8") {
        diceMax = 8;
    }
    if (diceType === "d10") {
        diceMax = 10;
    }
    if (diceType === "d12") {
        diceMax = 12;
    }
    if (diceType === "d20") {
        diceMax = 20;
    }
    if (diceType === "d100") {
        diceMax = 100;
    }


    var randomNumber = getRandomInt(diceMin, diceMax);
    var randomNumber2 = 0;

    // No Advatages = 0
    

    // Advantage = 1
    if (advantageFactor === 1) {
        randomNumber2 = getRandomInt(diceMin, diceMax);
        if (randomNumber2 > randomNumber) {
            randomNumber = randomNumber2
        }

    }

    // Disadvantage = 2
    else if (advantageFactor === 2) {
        randomNumber2 = getRandomInt(diceMin, diceMax);
        if (randomNumber2 < randomNumber) {
            randomNumber = randomNumber2
        }
    }


    var mod = new Number(modifier);
    return randomNumber + mod;


}




export default function RollDice({ diceType, modifier, advantageFactor}) {
    return determineRoll( diceType, modifier, hasAdvantage, hasDisadvantage)
}


