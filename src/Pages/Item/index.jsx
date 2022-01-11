import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import Sidebar from '../../Components/Sidebar';

// item components imported 
import ItemForm from './ItemForm';
import ItemTable from './ItemTable';

export default function Index() {

    const [items, setItems] = useState([]);
    const [itemIndex, setItemIndex] = useState("");

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Sidebar />     
                </Grid>                
                <Grid item xs={9} mt={2}>
                    <ItemForm
                        items={items} 
                        setItems={setItems}
                        itemIndex={itemIndex}
                        setItemIndex={setItemIndex}
                    />
                    <ItemTable 
                        items={items}
                        setItems={setItems}
                        setItemIndex={setItemIndex}    
                    />
                </Grid>
            </Grid>
        </Box>
    )
}
