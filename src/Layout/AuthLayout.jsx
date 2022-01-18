import React, { useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import Sidebar from '../Components/Sidebar';

import { useNavigate } from "react-router-dom";

export default function AuthLayout(props) {

    const { children, align } = props;

    let navigate = useNavigate();

    useEffect(() => {
        if( localStorage.getItem('user_data') === null ) {
            navigate(`/login`);
        }
    }, [navigate])

    return (
        <Box sx={{ flexGrow: 1, textAlign: `${align}` }}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Sidebar />     
                </Grid>                
                <Grid item xs={9} mt={2}>
                    {children}
                </Grid>
            </Grid>
        </Box>
    )
}
