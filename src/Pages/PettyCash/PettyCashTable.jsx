import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import {
    Paper, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Stack, IconButton, Button 
} from '@mui/material';

// import DeleteIcon from '@mui/icons-material/Delete';
import { Delete, Edit } from '@mui/icons-material';

import { pettyCashKey } from '../../constant';

const TableRowData = ({ entry, ind }) => {
    const { entry_date, item_count, total_amount } = entry || {};
   
    return(
        <>
            <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell align="center" width={20}> { ind + 1 } </TableCell>
                <TableCell align="left"> { entry_date } </TableCell>
                <TableCell align="left"> { item_count } </TableCell>
                <TableCell align="left"> { total_amount } </TableCell>
                <TableCell align="center"> 
                    <Stack direction="row" spacing={1}>
                        {/* <IconButton color="warning" aria-label="delete" onClick={handleEdit}>
                            <Edit />
                        </IconButton>
                        <IconButton color="error" aria-label="delete" onClick={() => deleteItem(ind)}>
                            <Delete />
                        </IconButton>                     */}
                    </Stack>
                </TableCell>
            </TableRow>
        </>
    );
}

export default function PettyCashTable() {

    const linkClass = {
        textDecoration: "none",
        color: "unset"
    };

    const [ pettyCashEntries, setPettyCashEntries ] = useState([]);

    useEffect(() => {
        if( localStorage.getItem(pettyCashKey) !== null ) {
            const storagePettyCashEntries = JSON.parse(localStorage.getItem(pettyCashKey));
            setPettyCashEntries([...storagePettyCashEntries]);
        }
    }, [])

    return (
        <Paper sx={{ width: '100%' }}>

            <Link style={linkClass} to="/pettycash-add">
                <Button variant="outlined" >Add</Button>
            </Link> 

            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>                            
                            <TableCell align="center" width={20}> Sr. </TableCell>
                            <TableCell align="left"> Date </TableCell>
                            <TableCell align="left"> Item Count </TableCell>
                            <TableCell align="left"> Total Amount </TableCell>
                            <TableCell align="center"> Action </TableCell>                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { pettyCashEntries?.map((entry, i) => 
                            <TableRowData 
                                key={i}
                                entry={entry}
                                ind={i}
                            />
                        ) }               
                    </TableBody>
                </Table>
            </TableContainer>        
        </Paper>
    )
}
