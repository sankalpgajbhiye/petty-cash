import React from 'react';
import { Box, Grid } from '@mui/material';
import Sidebar from '../../Components/Sidebar';

import AddForm from './AddForm';

export default function Add() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Sidebar />     
                </Grid>                
                <Grid item xs={9} mt={2}>
                    <AddForm />
                </Grid>
            </Grid>
        </Box>
    )
}
