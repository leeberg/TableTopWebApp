import React, { useState } from 'react';
import { styled } from '@mui/material/styles';

import MenuItem from '@mui/material/MenuItem';

import Select from '@mui/material/Select';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Copyright from '../components/Copyright';

import Button from '@mui/material/Button';

import FormGroup from '@mui/material/FormGroup';


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




export default class Noticeboardpage extends React.Component {


    //////////////////////////////////////////////////


    state = {


        currentSettlementSize: 0,
        currentLocale: 0,

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


        let newQuests = SetupBoard(this.state.currentSettlementSize, this.state.currentLocale);

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
                                        Notice Board 📜
                                    </Typography>


                                </Box>




                                <Stack spacing={3}>
                                    <FormGroup>

                                        <Stack direction="row" spacing={1}>


                                            <Select
                                                id="select-currentSettlementSize"
                                                name="currentSettlementSize"
                                                value={this.state.currentSettlementSize}
                                                label="Location"
                                                onChange={this.handleInputChange}
                                            >
                                                <MenuItem value="0">Way Station</MenuItem>
                                                <MenuItem value="1">Hamlet</MenuItem>
                                                <MenuItem value="2">Village</MenuItem>
                                                <MenuItem value="3">Small Town</MenuItem>
                                                <MenuItem value="4">Large Town</MenuItem>
                                                <MenuItem value="5">City</MenuItem>

                                            </Select>




                                            <Select
                                                id="select-currentLocale"
                                                name="currentLocale"
                                                value={this.state.currentLocale}
                                                label="Location"
                                                onChange={this.handleInputChange}
                                            >

                                                <MenuItem value="0">Artic ⛄</MenuItem>

                                                <MenuItem value="1">Coast 🌊 </MenuItem>
                                                <MenuItem value="2">River 💧 </MenuItem>
                                                
                                                <MenuItem value="3">Desert 🌵</MenuItem>
                                                <MenuItem value="4">Forest 🌲</MenuItem>
                                                <MenuItem value="5">Grassland 🦗</MenuItem>
                                                <MenuItem value="6">Mountain 🌄</MenuItem>
                                                <MenuItem value="7">Swamp 🌱</MenuItem>
                                                
                                                <MenuItem value="8">Urban 🏙</MenuItem>


                                            </Select>


                                        </Stack>

                                    </FormGroup>


                                    <Stack spacing={3}>


                                        <Button variant="contained" size="large" onClick={this.rollQuests} >
                                            Generate
                                        </Button>








                                        <Box>
                                            <Grid>
                                                {
                                                    this.state.currentQuests.map((quest) => (
                                                        <Grid >
                                                            <Item>
                                                                <Typography variant="h4" display="block" gutterBottom>
                                                                    {quest}
                                                                </Typography>
                                                            </Item>
                                                        </Grid>
                                                    ))}
                                            </Grid>
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
