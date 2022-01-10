import React from 'react';

import {
    Paper, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow 
} from '@mui/material';

const TableRowComp = ({ item, ind }) => {
    return(
        <TableRow hover role="checkbox" tabIndex={-1}>
            <TableCell align="center" width={20}> { ind + 1 } </TableCell>
            <TableCell align="left"> { item.item_name } </TableCell>
            <TableCell align="left"> { item.item_price } </TableCell>
            <TableCell align="center"> Action </TableCell>
        </TableRow>
    )
}

export default function ItemTable({ items }) {

    return (
        <Paper sx={{ width: '100%' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>                            
                            <TableCell align="center" width={20}> Sr. </TableCell>
                            <TableCell align="left"> Item Name </TableCell>
                            <TableCell align="left"> Item Price </TableCell>
                            <TableCell align="center"> Action </TableCell>                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { items.map((item,i) => 
                            <TableRowComp 
                                key={i}
                                ind={i}
                                item={item}
                            />                            
                        ) }                        
                    </TableBody>
                </Table>
            </TableContainer>
            {/* <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            /> */}
        </Paper>
    )
}
