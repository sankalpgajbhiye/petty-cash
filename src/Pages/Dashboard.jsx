import React from 'react';
import { Box, Grid } from '@mui/material';
import Sidebar from '../Components/Sidebar';

export default function Dashboard() {

    return (
        <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Sidebar />     
                </Grid>                
                <Grid item xs={9}>2</Grid>
            </Grid>
        </Box>
    )
}
