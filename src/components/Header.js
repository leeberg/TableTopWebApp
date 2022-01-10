import React, { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from './Link';


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
                    <Link href="/TableTopWebApp/roll" underline="hover">
                        {'underline="hover"'} Rolling
                    </Link>
                </Button>


                <Button color="inherit" >
                    <Link href="/TableTopWebApp/travel" underline="hover">
                        {'underline="hover"'} Travel
                    </Link>
                </Button>


                <Button color="inherit" >                    
                    <Link href="/TableTopWebApp/noticeboard" underline="hover">
                        {'underline="hover"'} Notice Board
                    </Link>
                </Button>


                <Button color="inherit" >
                    <Link href="/TableTopWebApp/settlement" underline="hover">
                        {'underline="hover"'} Settlement
                    </Link>
                </Button>


            </Toolbar>


        </AppBar>







    );
};

export default Header;