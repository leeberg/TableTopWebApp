import * as React from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



export default function RollResults({ props }) {


    const rolls = props.rolls;

    return (


        <Box sx={{ flexGrow: 1 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {rolls.map((roll) => (
                    <Grid item xs={2} key={roll.value} style={{width: '20px'}} >
                        <Item>
                            <Typography variant="h4" display="block" gutterBottom>
                                {roll}
                            </Typography>
                        </Item>
                    </Grid>
                ))}
            </Grid>
        </Box>

    );

}


