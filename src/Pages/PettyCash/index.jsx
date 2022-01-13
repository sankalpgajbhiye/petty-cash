// import React, { useState, useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import Sidebar from '../../Components/Sidebar';

// component import 
import PettyCashTable from './PettyCashTable';

export default function Index() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Sidebar />     
                </Grid>                
                <Grid item xs={9} mt={2}>
                    <PettyCashTable />
                </Grid>
            </Grid>
        </Box>
    )
}
