import React, { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';


const Header = () => {



    return (
        <AppBar position="static">
            <Toolbar>

                <Typography variant="h6">
                    Bergotronic Studios RPG Helper
                </Typography>

                <Typography variant="h6">
                    |
                </Typography>

                <Button color="inherit" >
                    <NavLink to="/roll">Rolling</NavLink>
                </Button>


                <Button color="inherit" >
                    <NavLink to="/travel">Travel</NavLink>
                </Button>

                
                <Button color="inherit" >
                    <NavLink to="/noticeboard">Board</NavLink>
                </Button>


                <Button color="inherit" >
                    <NavLink to="/settlement">Settlement</NavLink>
                </Button>


            </Toolbar>


        </AppBar>







    );
};

export default Header;