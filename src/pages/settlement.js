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



const questTypes = ["Bounty", "Clear", "EscortPerson", "EscortCargo", "Hunt"];


function SetupBoard(size, location) {

    let boardQuests = [];

    var size = parseInt(size);
    var questsToShow = 2;


    console.log("New Board setup with size: " + size + " and location: " + location);

    switch (size) {
        case 1:

            questsToShow = questsToShow + 1;
            break;

        case 2:

            questsToShow = questsToShow + 2;
            break;

        case 3:

            questsToShow = questsToShow + 3;
            break;

        case 4:

            questsToShow = questsToShow + 4;
            break;

        case 5:

            questsToShow = questsToShow + 10;
            break;

        default:
            break;
    }


    console.log("Quests to SHow: " + questsToShow);

    for (let index = 0; index < questsToShow; index++) {
        //const element = array[index];

        var questType = questTypes[Math.floor(Math.random() * questTypes.length)];


        boardQuests.push(questType)

    }



    return boardQuests;




}


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));




export default class Settlementpage extends React.Component {


    //////////////////////////////////////////////////


    state = {


        currentStrongholdType: 0,
        currentStrongholdLevel: 0,

        currentQuests: []



    }





    handleInputChange = event => {


        const target = event.target
        const value = target.value
        const name = target.name


        this.setState({
            [name]: value,
        })

    }



    rollQuests = event => {
        event.preventDefault()

        //Clear Roll Array
        this.setState({
            currentQuests: []
        });


        let newQuests = SetupBoard(this.state.currentStrongholdType, this.state.currentStrongholdLevel);

        //Set array to new value
        this.setState({
            currentQuests: newQuests
        })

        this.forceUpdate();


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
                                        Stronghold Tracker 🏰
                                    </Typography>


                                </Box>




                                <Stack spacing={3}>
                                    <FormGroup>

                                        <Stack direction="row" spacing={1}>


                                            <Select
                                                id="select-currentStrongholdType"
                                                name="currentStrongholdType"
                                                value={this.state.currentStrongholdType}
                                                label="Stonghold"
                                                onChange={this.handleInputChange}
                                            >
                                                <MenuItem value="0">Keep</MenuItem>
                                                <MenuItem value="1">Tower</MenuItem>
                                                <MenuItem value="2">Temple</MenuItem>
                                                <MenuItem value="3">Establishment</MenuItem>

                                            </Select>




                                            <Select
                                                id="select-currentStrongholdLevel"
                                                name="currentStrongholdLevel"
                                                value={this.state.currentStrongholdLevel}
                                                label="Level"
                                                onChange={this.handleInputChange}
                                            >

                                                <MenuItem value="0">1</MenuItem>
                                                <MenuItem value="1">2</MenuItem>
                                                <MenuItem value="2">3</MenuItem>
                                                <MenuItem value="3">4</MenuItem>


                                            </Select>


                                        </Stack>

                                    </FormGroup>


                                    <Stack spacing={3}>




                                        <Box>
                                            Toughness : 20
                                            Upgrade Cost: 6,000
                                            Time to Upgrade: 120


                                            Settlement Actions:
                                            Derp, Terp, Slerp

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
