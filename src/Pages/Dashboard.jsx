import React from 'react';
import AuthLayout from '../Layout/AuthLayout';

export default function Dashboard() {

    const align = "center";

    return (
        <AuthLayout align={align}>
            <h1>This is dashboard child</h1>
        </AuthLayout>
        // <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
        //     <Grid container spacing={3}>
        //         <Grid item xs={3}>
        //             <Sidebar />     
        //         </Grid>                
        //         <Grid item xs={9}>2</Grid>
        //     </Grid>
        // </Box>
    )
}
