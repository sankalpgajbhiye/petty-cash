import React from 'react';
import { Link } from "react-router-dom";
import {
    Paper, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Stack, IconButton, Button 
} from '@mui/material';

// import DeleteIcon from '@mui/icons-material/Delete';
import { Delete, Edit } from '@mui/icons-material';

export default function PettyCashTable() {

    const linkClass = {
        textDecoration: "none",
        color: "unset"
    };

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
                                            
                    </TableBody>
                </Table>
            </TableContainer>        
        </Paper>
    )
}
