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



export default function RollEvaluation({ props }) {


    const rolls = props.rolls;
    const rollsCount = parseInt(props.rolls.length);

    const target = props.targetRoll;
    const RollType = props.currentRollType;

    var hitCount = 0
    var critCount = 0
    var summary = "";

    
    rolls.forEach(roll => {
        if (roll >= target) {
            if (RollType === "Save") {
                hitCount++;
            }
            if (RollType === "Attack") {
                hitCount++;
                //TODO NAT 20s
            }
            if (RollType === "Damage") {
                
                hitCount = (hitCount + parseInt(roll));
                console.log("Logging damage: "+ roll + " new total: " + hitCount);
            }
        }
    });

    



    if (RollType === "Save") {
        var failCount = parseInt(rollsCount - hitCount);
        summary = hitCount + " Saving Throws Succeed - " + failCount + " failed!";            
    }

    if (RollType === "Attack") {
        summary = hitCount + " Successful Hits!";
    }

    if (RollType === "Damage") {
        summary = hitCount + " Total Damage";
    }
        


    return (


        <Box sx={{ flexGrow: 1 }}>
            {summary}
        </Box>

    );

}


