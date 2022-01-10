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
import Header from '../components/Header';


function GenerateTravelStats(methodOfTransport, pace, HexSize, ExtraDifficulty) {

    console.log(methodOfTransport + " " + pace + " " + HexSize + " " + ExtraDifficulty)

    var basespeed = 0
    var speedMultiplier = 1;

    switch (parseInt(methodOfTransport)) {
        case 1:
            basespeed = 3;
            break;
        case 2:

            basespeed = 4;
            break;

        case 3:

            basespeed = 3;
            break;

        case 4:

            basespeed = 5;
            break;

        default:
            break;
    }






    switch (parseInt(pace)) {
        case 0:
            speedMultiplier = 0.666;
            break;

        case 1:
            speedMultiplier = 1;
            break;

        case 2:
            speedMultiplier = 1.333;
            break;

        default:
            break;
    }


    var terrainDifficultyMultiplier = 1
    switch (parseInt(ExtraDifficulty)) {
        case 1:

            terrainDifficultyMultiplier = 0.8;
            break;

        case 2:

            terrainDifficultyMultiplier = 0.5;
            break;

        case 3:

            terrainDifficultyMultiplier = .25;
            break;


        default:
            break;
    }




    var newSpeed = (basespeed * speedMultiplier) * terrainDifficultyMultiplier;


    return newSpeed;

}



function CalculateHexSpeed(speed, hextype) {

    //1 Hex per every X Hours
    //       <MenuItem value="0">Province 🏡 - 1 Mile</MenuItem>
    //<MenuItem value="1">Kingdom 👑 - 6 Miles</MenuItem>
    //<MenuItem value="2">Continent 🌎 - 60 Miles </MenuItem>

    var hexPerHour = "1"

    switch (parseInt(hextype)) {
        case 0: //Province 1 Mile
            hexPerHour = speed;
            break;

        case 1:  //Regions 5 Miles  - LMoP map does 5...
            hexPerHour = ((speed) / 5).toFixed(2);
            break;

        case 2: //Province 6 Miles
            hexPerHour = ((speed) / 6).toFixed(2);
            break;

        case 3:  //Continent 5 Miles
            hexPerHour = ((speed) / 60).toFixed(2);
            break;


    }

    return hexPerHour;


}

function CalculateStress(method, pace, bushwhack, hoursperday) {

    var calculatedStressScore = 2;
    var calculatedStress = "Sustainable";


    console.log("Calculating Stress for: " + method + " pace: " + pace + " bushwhack: " + bushwhack + " hours per day:" + hoursperday)

    //Stress        0
    //"Relaxing"        0
    //"Easy"            1
    //"Sustainable"     2
    //"Stressful"       3
    //"Exhausting"      4



    //Slow
    if (parseInt(pace) === 0) {

        //normal 4 hours is Relaxing
        //normal 8 hours is Low
        //normal 12 hoours is Sustainable

        switch (parseInt(hoursperday)) {
            case 4:
                calculatedStressScore = 0;
                break;

            case 8:

                calculatedStressScore = 1;
                break;

            case 12:

                calculatedStressScore = 2;
                break;


        }



    }



    //Normal
    if (parseInt(pace) === 1) {
        //normal 4 hours is Low
        //normal 8 hours is sustainable
        //normal 12 hoours is stresfful

        switch (parseInt(hoursperday)) {
            case 4:
                calculatedStressScore = 1;
                break;

            case 8:

                calculatedStressScore = 2;
                break;

            case 12:

                calculatedStressScore = 3;
                break;

        }
    }

    //Fast
    if (parseInt(pace) === 2) {

        //fast 4 hours a day is sustainable
        //Fast 8 hours a day is stressfull
        //Fast 12 hours a day is exhausting

        switch (parseInt(hoursperday)) {
            case 4:
                calculatedStressScore = 2;
                break;

            case 8:

                calculatedStressScore = 3;
                break;

            case 12:

                calculatedStressScore = 4;
                break;

        }

    }

    //bushwacking 0,1,2,3, added point  //TODO BUSHWHACKING
    //calculatedStressScore = calculatedStressScore + bushwhack;


    if(parseInt(bushwhack) === 3  )
    {
        calculatedStressScore = calculatedStressScore + 1;
    }


    //<MenuItem value="1">Foot 🚶‍♀️</MenuItem>
    //<MenuItem value="2">Horseback 🐎 </MenuItem>
    //<MenuItem value="3">Wagon 🛷 </MenuItem>
    //<MenuItem value="4">Ship 🚢</MenuItem>

    

    if(parseInt(method) === 4  )
    {
        calculatedStressScore = calculatedStressScore - 1;
    }


    //Stress        0
    //"Relaxing"        0
    //"Easy"            1
    //"Sustainable"     2
    //"Stressful"       3
    //"Exhausting"      4


    switch (parseInt(calculatedStressScore)) {
        case 0:
            calculatedStress = "Relaxing";
            break;
        case 1:
            calculatedStress = "Easy";
            break;
        case 2:
            calculatedStress = "Sustainable";
            break;
        case 3:
            calculatedStress = "Stressful";
            break;
        case 4:
            calculatedStress = "Exhausting";
            break;
    }



    return calculatedStress;

}

export default class Travelpage extends React.Component {


    //////////////////////////////////////////////////


    state = {
        currentPartyHumanoidSize: 0,
        totalDistanceTraveled: 0,
        currentTravelPace: 1,
        currentTravelMethod: 1,
        currentTreavelTerrainType: 1,
        currentDistanceToGo: 0,
        currentTravelSpeed: 3,
        currentPartySize: 1,
        currentTravelVehicle: 0,
        supplyUsagePerDay: 0,
        TravelPace: "Normal",
        currentHexType: 0,
        currentTerrainTravelDifficulty: 0,
        currentShipType: 0,
        isOnShip: false,
        calculatedHexPerHour: 3,
        calculatedHexPerDay: 8,
        currentTravelHoursPerDay: 8,
        currentTravelStress: "Sustainable"




    }





    //////////////////////////////////////////////////
    //The Dungeon Master's Guide has guidance on three mapping scales: province scale (1 hex = 1 mile) kingdom scale (1 hex = 6 miles) continent scale (1 hex = 60 miles)


    handleInputChange = event => {


        const target = event.target
        const value = target.value
        const name = target.name


        var shipTravel = this.state.isOnShip;
        var method = this.state.currentTravelMethod;
        var pace = this.state.currentTravelPace;
        var hexSize = this.state.currentHexType;
        var bushwhack = this.state.currentTerrainTravelDifficulty;
        var travelhours = this.state.currentTravelHoursPerDay;
        //Target Roll
        if (name === "currentTravelMethod") {

            if (parseInt(value) === 4) {
                shipTravel = true;
            }
            else {
                shipTravel = false;
            }

            method = value;

        }


        if (name === "currentTravelPace") {
            pace = value;
        }
        if (name === "currentTerrainTravelDifficulty") {
            bushwhack = value;
        }
        if (name === "currentHexType") {
            hexSize = value
        }
        if (name === "currentTravelHoursPerDay") {
            travelhours = value;
        }



        var speed = GenerateTravelStats(method, pace, hexSize, bushwhack);
        var hexPerHour = CalculateHexSpeed(speed, hexSize);
        var hexPerDay = (hexPerHour * travelhours);
        if(hexPerDay === 4.8)
        {
            hexPerDay = 5; //this is a book thing
        }

        var stress = CalculateStress(method, pace, bushwhack, travelhours);


        this.setState({
            [name]: value,
            isOnShip: shipTravel,
            currentTerrainTravelDifficulty: bushwhack,
            currentTravelMethod: method,
            currentTravelSpeed: speed,
            calculatedHexPerHour: hexPerHour,
            calculatedHexPerDay: hexPerDay,
            currentTravelHoursPerDay: travelhours,
            currentTravelStress: stress

        })







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
                                        Travel Helper ✈
                                    </Typography>



                                </Box>




                                <Stack spacing={3}>
                                    <FormGroup>

                                        <Stack direction="row" spacing={1}>

                                            <Select
                                                labelId="select-pace-method"
                                                id="select-method"
                                                name="currentTravelMethod"
                                                value={this.state.currentTravelMethod}
                                                label="TravelPace"
                                                onChange={this.handleInputChange}
                                            >

                                                <MenuItem value="1">Foot 🚶‍♀️</MenuItem>
                                                <MenuItem value="2">Horseback 🐎 </MenuItem>
                                                <MenuItem value="3">Wagon 🛷 </MenuItem>
                                                <MenuItem value="4">Ship 🚢</MenuItem>

                                            </Select>




                                            {this.state.isOnShip ?
                                                <Select

                                                    id="select-currentShipType"
                                                    name="currentShipType"
                                                    value={this.state.currentShipType}
                                                    label="Ship Type"
                                                    onChange={this.handleInputChange}
                                                >

                                                    <MenuItem value="0">Keelboat</MenuItem>
                                                    <MenuItem value="1">Rowboat</MenuItem>
                                                    <MenuItem value="2">Canoe</MenuItem>
                                                    <MenuItem value="3">Keelboat </MenuItem>
                                                    <MenuItem value="4">Longship</MenuItem>
                                                    <MenuItem value="5">Small Sailboat</MenuItem>
                                                    <MenuItem value="6">Large Sailboat</MenuItem>
                                                    <MenuItem value="7">Galley</MenuItem>
                                                    <MenuItem value="8">Warshipp</MenuItem>

                                                </Select>
                                                : null}



                                            <Select
                                                labelId="select-pace-label"
                                                id="select-pace"
                                                name="currentTravelPace"
                                                value={this.state.currentTravelPace}
                                                label="TravelPace"
                                                onChange={this.handleInputChange}
                                            >

                                                <MenuItem value="0">Slow 🐱‍👤</MenuItem>
                                                <MenuItem value="1">Normal 🚶‍♀️</MenuItem>
                                                <MenuItem value="2">Fast 🏃‍♀️</MenuItem>


                                            </Select>


                                            <Select
                                                labelId="select-perday-label"
                                                id="select-hours"
                                                name="currentTravelHoursPerDay"
                                                value={this.state.currentTravelHoursPerDay}
                                                label="Traveling Hours"
                                                onChange={this.handleInputChange}
                                            >

                                                <MenuItem value="4">Casual - 4 Hours</MenuItem>
                                                <MenuItem value="8">Normal - 8 Hours</MenuItem>
                                                <MenuItem value="12">Grueling - 12 Hours</MenuItem>


                                            </Select>




                                        </Stack>

                                    </FormGroup>


                                    <Stack spacing={3}>
                                        <FormGroup>

                                            <Stack direction="row" spacing={1}>

                                                <Select

                                                    id="select-hex-size"
                                                    name="currentHexType"
                                                    value={this.state.currentHexType}
                                                    label="Hex Scale"
                                                    onChange={this.handleInputChange}
                                                >

                                                    <MenuItem value="0">Province 🏡 - 1 Mile</MenuItem>
                                                    <MenuItem value="1">Region 🚵‍♀️ - 5 Miles</MenuItem>
                                                    <MenuItem value="2">Kingdom 👑 - 6 Miles</MenuItem>
                                                    <MenuItem value="3">Continent 🌎 - 60 Miles </MenuItem>


                                                </Select>



                                                <Select

                                                    id="select-hex-type"
                                                    name="currentTerrainTravelDifficulty"
                                                    value={this.state.currentTerrainTravelDifficulty}
                                                    label="Terrain Travel Difficulty"
                                                    onChange={this.handleInputChange}
                                                >
                                                    <MenuItem value="0">None</MenuItem>
                                                    <MenuItem value="1">Bushwhacking Easy </MenuItem>
                                                    <MenuItem value="2">Bushwhacking Moderate</MenuItem>
                                                    <MenuItem value="3">Bushwhacking Difficult</MenuItem>

                                                </Select>



                                            </Stack>

                                        </FormGroup>







                                        <Box>
                                            Speed:  {this.state.currentTravelSpeed} MPH
                                            <br />
                                            Hexes Per Hour:  {this.state.calculatedHexPerHour}
                                            <br />
                                            Hexes Per Day:  {this.state.calculatedHexPerDay}
                                            <br />
                                            Daily Travel Stress:  {this.state.currentTravelStress}

                                        </Box>

                                    </Stack>
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
