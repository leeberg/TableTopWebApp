import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../components/ProTip';
import Link from '../components/Link';
import Copyright from '../components/Copyright';
import { IconButton } from "@mui/material";

import Button from '@mui/material/Button';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Stack } from '@mui/material';
import { Card, Col, CardBody, CardTitle, CardSubtitle, CardText } from '@mui/material';
import { ListItem } from '@mui/material';
import { RadioGroup } from '@mui/material';
import { Radio } from '@mui/material';
import { FormLabel } from '@mui/material';
import { Tab } from '@mui/material';
import { Tabs } from '@mui/material';

import RollResults from '../components/rollResults';
import RollEvaluation from '../components/RollEvaluation';
import Header from '../components/Header';




function determineRoll(diceCount, diceType, modifier, hasAdvantage, hasDisadvantage) {

    var allRollCount = 0;

    for (let index = 0; index < diceCount; index++) {

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

        if (hasAdvantage === true) {
            randomNumber2 = getRandomInt(diceMin, diceMax);
            if (randomNumber2 > randomNumber) {
                randomNumber = randomNumber2
            }

        }
        else if (hasDisadvantage === true) {
            randomNumber2 = getRandomInt(diceMin, diceMax);
            if (randomNumber2 < randomNumber) {
                randomNumber = randomNumber2
            }
        }

        allRollCount = allRollCount + randomNumber;
        //console.log("Roll Iteration: " + index + " - " + randomNumber + " Total: " + allRollCount);

    }


    var mod = new Number(modifier);
    return allRollCount + mod;


}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max) + 1;
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function evaluateRollSuccess(type, check, roll) {

    var result = false;

    if (type === "Saving Throw") {
        if (check >= roll) {
            result = true;
        }
    }
    if (type === "ToHit") {
        if (check >= roll) {
            result = true;
        }
    }

}

function buildDiceRollDescription(diceCount, diceType, modifier, advantage, disadvantage) {

    var rolldescription = "Roll " + diceCount + diceType;


    if (modifier != 0) {

        if (modifier > 0) {
            rolldescription = rolldescription + "+" + modifier;
        }
        if (modifier < 0) {
            //maertial ui uncludes the minus shrug
            rolldescription = rolldescription + modifier;
        }

    }

    if (advantage == true) {
        rolldescription = rolldescription + " with Advantage!";
    }


    if (disadvantage == true) {
        rolldescription = rolldescription + " with Disadvantage!";
    }


    //console.log(rolldescription);
    return rolldescription;

}





export default class Rollpage extends React.Component {


    //////////////////////////////////////////////////


    state = {
        line1DiceType: "d6",
        line1HasAdvantage: false,
        line1HasDisadvantage: false,
        line1Modifier: 0,
        line1AttackDamageType: "Piercing",
        showRolls: false,
        rolls: [],
        numberOfRolls: 1,
        rollDisplay: '',
        isGenericRoll: true,
        isHitRoll: false,
        isSaveRoll: false,
        isDamageRoll: false,
        showArmorClass: false,
        showSavingThrow: false,
        showDiceOptions: true,
        showResultEvaluation: false,
        targetRoll: 0,
        currentRollDescription: "Roll 1D6",
        currentRollSum: 0,
        currentRollType: "Generic",
        line1DiceRollIterations: 1


    }

    //////////////////////////////////////////////////



    handleInputChange = event => {


        const target = event.target
        const value = target.value
        const name = target.name


        var descriptor1 = this.state.numberOfRolls;
        var descriptor2 = this.state.line1DiceType;
        var descriptor3 = this.state.line1Modifier;


        //Target Roll
        if (name === "targetRoll") {

        }

        //Modifer
        if (name === "line1Modifier") {
            descriptor3 = value;
        }

        //Dice Count
        if (name === "numberOfRolls") {
            descriptor1 = value;
        }
        //Dice Type
        if (name === "line1DiceType") {
            descriptor2 = value;
        }



        this.setState({
            [name]: value,
            currentRollDescription: buildDiceRollDescription(descriptor1, descriptor2, descriptor3, this.state.line1HasAdvantage, this.state.line1HasDisadvantage)
        })

    }


    handleAdvantageTypeChange = event => {

        const target = event.target
        const value = target.checked
        const name = target.name

        var hasAdvantage = false;
        var hasDisadvantage = false;


        if (name == "line1HasAdvantage" && value == true) {
            hasAdvantage = true;
        }

        if (name == "line1HasDisadvantage" && value == true) {
            hasDisadvantage = true;
        }

        this.setState({
            line1HasAdvantage: hasAdvantage,
            line1HasDisadvantage: hasDisadvantage,
            currentRollDescription: buildDiceRollDescription(this.state.numberOfRolls, this.state.line1DiceType, this.state.line1Modifier, hasAdvantage, hasDisadvantage)
        })


    }


    handleRollTypeChange = (event, newValue) => {


        const newRollType = newValue


        var isGenericRoll = false
        var isSaveRoll = false
        var isHitRoll = false
        var isDamageRoll = false
        var showArmorClass = false;
        var showSavingThrow = false
        var showDiceOptions = false;
        var diceType = this.state.line1DiceType;
        var diceCount = this.state.numberOfRolls;
        var rollIterations = 1; //reset back to one roll iteration
        var resultEvaluation = false;

        if (newRollType === "Generic") {

            isGenericRoll = true;
            showDiceOptions = true;
        }


        if (newRollType === "Attack") {

            isSaveRoll = true
            showArmorClass = true;
            diceType = "d20";
            diceCount = 1;
            resultEvaluation= true;
        }

        if (newRollType === "Save") {

            isHitRoll = true;
            showSavingThrow = true;
            diceType = "d20";
            diceCount = 1;
            resultEvaluation= true;

        }

        if (newRollType === "Damage") {

            isDamageRoll = true;
            showDiceOptions = true;
            diceType = "d6";
            resultEvaluation= true;
        }



        this.setState({
            line1DiceType: diceType,
            numberOfRolls: diceCount,
            line1HasDisadvantage: false,
            line1HasAdvantage: false,
            line1Modifier: 0,
            isGenericRoll: isGenericRoll,
            isSaveRoll: isSaveRoll,
            isHitRoll: isHitRoll,
            isDamageRoll: isDamageRoll,
            currentRollType: newRollType,
            showArmorClass: showArmorClass,
            showSavingThrow: showSavingThrow,
            showDiceOptions: showDiceOptions,
            showResultEvaluation: resultEvaluation,

            line1DiceRollIterations: rollIterations,
            rolls: [],
            currentRollDescription: buildDiceRollDescription(diceCount, diceType, 0, false, false)
        });


    }



    rollDice = event => {
        event.preventDefault()

        //Clear Roll Array
        this.setState({
            rolls: []
        });

        const newRolls = [];

        // Rool for number of rolls
        for (let index = 0; index < this.state.line1DiceRollIterations; index++) {

            let result = determineRoll(this.state.numberOfRolls, this.state.line1DiceType, this.state.line1Modifier, this.state.line1HasAdvantage, this.state.line1HasDisadvantage);

            newRolls.push(result);

        }

        //Set array to new value
        this.setState({
            rolls: newRolls
        })

        this.forceUpdate();




        


    }




    render() {

        return (
            <Container maxWidth="lg">
                 <Header/>
                <Container maxWidth="md">
                    <Box>
                        <Stack spacing={3}>
                            <Container maxWidth="sm">
                                <Box sx={{ my: 4 }}>
                                    <Typography variant="h4" component="h1" gutterBottom>
                                        Dice Roller
                                    </Typography>

                                    <ProTip />

                                </Box>

                                <Stack spacing={3}>
                                    <FormGroup>
                                        <FormControl component="fieldset">

                                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                                <Tabs variant="fullWidth" value={this.state.currentRollType} aria-label="basic tabs example" onChange={this.handleRollTypeChange}>
                                                    <Tab label="Generic" value={"Generic"} />
                                                    <Tab label="Attack" value={"Attack"} />
                                                    <Tab label="Save" value={"Save"} />
                                                    <Tab label="Damage" value={"Damage"} />
                                                </Tabs>
                                            </Box>



                                            {this.state.showArmorClass ?
                                                <TextField
                                                    name="targetRoll"
                                                    label="Target Armor Class"
                                                    type="number"
                                                    value={this.state.targetRoll}
                                                    onChange={this.handleInputChange}
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                />
                                                : null}



                                            {this.state.showSavingThrow ?
                                                <TextField
                                                    name="targetRoll"
                                                    label="Saving Throw DC"
                                                    type="number"
                                                    value={this.state.targetRoll}
                                                    onChange={this.handleInputChange}
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                />
                                                : null}

                                        </FormControl>

                                    </FormGroup>



                                </Stack>


                                <Stack spacing={3}>
                                    <FormGroup>

                                        <Stack direction="row" spacing={1}>

                                            {this.state.isHitRoll || this.state.isSaveRoll || this.state.isDamageRoll ?
                                                <TextField
                                                    id="outlined-number"
                                                    name="line1Modifier"
                                                    label="Modifier"
                                                    type="number"
                                                    value={this.state.line1Modifier}
                                                    onChange={this.handleInputChange}
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                />
                                                : null}

                                            {this.state.isDamageRoll ?


                                                <Select
                                                    labelId="select-damage-label"
                                                    id="select-damage"
                                                    name="line1AttackDamageType"
                                                    value={this.state.line1AttackDamageType}
                                                    label="Damage Type"
                                                    onChange={this.handleInputChange}
                                                >

                                                    <MenuItem value="Acid">Acid 🧪</MenuItem>
                                                    <MenuItem value="Bludgeoning">Bludgeoning 🔨</MenuItem>
                                                    <MenuItem value="Cold">Cold ⛄</MenuItem>
                                                    <MenuItem value="Fire">Fire 🔥</MenuItem>
                                                    <MenuItem value="Force">Force 👊</MenuItem>
                                                    <MenuItem value="Lightning">Lightning ⚡</MenuItem>
                                                    <MenuItem value="Necrotic">Necrotic 💀</MenuItem>
                                                    <MenuItem value="Piercing">Piercing 📌</MenuItem>
                                                    <MenuItem value="Poison">Poison 🤮</MenuItem>
                                                    <MenuItem value="Psychic">Psychic 🧠</MenuItem>
                                                    <MenuItem value="Radiant">Radiant 🌞</MenuItem>
                                                    <MenuItem value="Slashing">Slashing 🔪</MenuItem>
                                                    <MenuItem value="Thunder">Thunder 🔊</MenuItem>

                                                </Select>

                                                : null}

                                            {this.state.isHitRoll || this.state.isSaveRoll ?
                                                <FormControlLabel control={<Checkbox
                                                    name="line1HasAdvantage"
                                                    checked={this.state.line1HasAdvantage}
                                                    onChange={this.handleAdvantageTypeChange}
                                                    value={this.state.line1HasAdvantage}
                                                    inputProps={{ 'aria-label': 'controlled' }}
                                                />} label="Advantage" />
                                                : null}

                                            {this.state.isHitRoll || this.state.isSaveRoll ?
                                                <FormControlLabel control={<Checkbox
                                                    name="line1HasDisadvantage"
                                                    checked={this.state.line1HasDisadvantage}
                                                    onChange={this.handleAdvantageTypeChange}
                                                    value={this.state.line1HasDisadvantage}
                                                    inputProps={{ 'aria-label': 'controlled' }}
                                                />} label="Disadvantage" />
                                                : null}

                                        </Stack>

                                    </FormGroup>

                                    <Box sx={{ display: 'flex', flexWrap: 'nowrap' }}>


                                        {this.state.showDiceOptions ?
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                name="numberOfRolls"
                                                value={this.state.numberOfRolls}
                                                label="Dice"
                                                onChange={this.handleInputChange}
                                            >
                                                <MenuItem value={1}>1</MenuItem>
                                                <MenuItem value={2}>2</MenuItem>
                                                <MenuItem value={3}>3</MenuItem>
                                                <MenuItem value={4}>4</MenuItem>
                                                <MenuItem value={5}>5</MenuItem>
                                                <MenuItem value={6}>6</MenuItem>
                                                <MenuItem value={7}>7</MenuItem>
                                                <MenuItem value={8}>8</MenuItem>
                                                <MenuItem value={10}>10</MenuItem>
                                                <MenuItem value={20}>20</MenuItem>
                                                <MenuItem value={50}>50</MenuItem>


                                            </Select>
                                            : null}


                                        {this.state.showDiceOptions ?
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                name="line1DiceType"
                                                value={this.state.line1DiceType}
                                                label="Dice Type"
                                                onChange={this.handleInputChange}
                                            >

                                                <MenuItem value="d4">d4</MenuItem>
                                                <MenuItem value="d6">d6</MenuItem>
                                                <MenuItem value="d8">d8</MenuItem>
                                                <MenuItem value="d10">d10</MenuItem>
                                                <MenuItem value="d12">d12</MenuItem>
                                                <MenuItem value="d20">d20</MenuItem>
                                                <MenuItem value="d100">d100</MenuItem>


                                            </Select>
                                            : null}



                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-line1DiceRollIterations-select"
                                            name="line1DiceRollIterations"
                                            value={this.state.line1DiceRollIterations}
                                            label="Dice Amount"
                                            onChange={this.handleInputChange}
                                        >

                                            <MenuItem value="1">1 Time</MenuItem>
                                            <MenuItem value="2">2 Times</MenuItem>
                                            <MenuItem value="3">3 Times</MenuItem>
                                            <MenuItem value="4">4 Times</MenuItem>
                                            <MenuItem value="5">5 Times</MenuItem>
                                            <MenuItem value="6">6 Times</MenuItem>
                                            <MenuItem value="7">7 Times</MenuItem>
                                            <MenuItem value="8">8 Times</MenuItem>
                                            <MenuItem value="9">9 Times</MenuItem>
                                            <MenuItem value="10">10 Times</MenuItem>
                                            <MenuItem value="11">11 Times</MenuItem>
                                            <MenuItem value="12">12 Times</MenuItem>
                                            <MenuItem value="13">13 Times</MenuItem>
                                            <MenuItem value="14">14 Times</MenuItem>
                                            <MenuItem value="15">15 Times</MenuItem>
                                            <MenuItem value="16">16 Times</MenuItem>
                                            <MenuItem value="17">17 Times</MenuItem>
                                            <MenuItem value="18">18 Times</MenuItem>
                                            <MenuItem value="19">19 Times</MenuItem>
                                            <MenuItem value="20">20 Times</MenuItem>



                                        </Select>



                                        <Button variant="contained" size="large" onClick={this.rollDice} >
                                            {this.state.currentRollDescription} 🎲
                                        </Button>



                                    </Box>



                                    {this.state.showResultEvaluation ?
                                        <Box>
                                            <RollEvaluation props={this.state} />
                                        </Box>
                                        : null}

                                    <br/>

                                    <Box>
                                        <RollResults props={this.state} />
                                    </Box>




                                </Stack>


                            </Container>

                        </Stack>
                    </Box >

                </Container>
                <Copyright />
            </Container>

        );
    }
}
