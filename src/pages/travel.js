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




export default class Travelpage extends React.Component {


    //////////////////////////////////////////////////


    state = {
        currentPartyHumanoidSize: 0,
        totalDistanceTraveled: 0,
        currentTravelPace: 1,
        currentTravelMethod: 1,
        currentTreavelTerrainType: 1,
        currentDistanceToGo: 0,
        currentTravelSpeed: 5,
        currentPartySize: 1,
        currentTravelVehicle: 0,
        supplyUsagePerDay: 0,
        TravelPace: "Normal",
        currentHexType: 0,
        currentTerrainTravelDifficulty: 0,
        currentShipType: 0,



    }

    //////////////////////////////////////////////////
    //The Dungeon Master's Guide has guidance on three mapping scales: province scale (1 hex = 1 mile) kingdom scale (1 hex = 6 miles) continent scale (1 hex = 60 miles)


    handleInputChange = event => {


        const target = event.target
        const value = target.value
        const name = target.name



        //Target Roll
        if (name === "targetRoll") {

        }

        //Modifer
        if (name === "line1Modifier") {

        }

        //Dice Count
        if (name === "numberOfRolls") {

        }
        //Dice Type
        if (name === "line1DiceType") {

        }



        this.setState({
            [name]: value,
        })

    }


    render() {

        return (
  
            <Container maxWidth="lg">
        
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
                                                <MenuItem value="2">Wagon 🛷 </MenuItem>
                                                <MenuItem value="3">Ship 🚢</MenuItem>

                                            </Select>


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



                                            <Select
                                                labelId="select-pace-label"
                                                id="select-pace"
                                                name="currentTravelPace"
                                                value={this.state.currentTravelPace}
                                                label="TravelPace"
                                                onChange={this.handleInputChange}
                                            >

                                                <MenuItem value="3">Fast 🏃‍♀️</MenuItem>
                                                <MenuItem value="2">Normal 🚶‍♀️</MenuItem>
                                                <MenuItem value="1">Slow 🐱‍👤</MenuItem>

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
                                                    <MenuItem value="1">Kingdom 👑 - 6 Miles</MenuItem>
                                                    <MenuItem value="2">Continent 🌎 - 60 Miles </MenuItem>


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
                                            Estimated Speed  3 MPH
                                            
                                            Travel Speed: .5 Hex Per Hour
                                            Hex Speed: 1 Hex per every 2 Hours
                                            Estimate: 10 Hours travel to reach desitination
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
