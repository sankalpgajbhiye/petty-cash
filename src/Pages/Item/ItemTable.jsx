import React from 'react';

import {
    Paper, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Stack, IconButton 
} from '@mui/material';

// import DeleteIcon from '@mui/icons-material/Delete';
import { Delete, Edit } from '@mui/icons-material';

import { itemsKey } from '../../constant';

const TableRowComp = ({ item, ind, setItemIndex, deleteItem }) => {

    const handleEdit = () => {
        setItemIndex(ind);
    }

    return(
        <TableRow hover role="checkbox" tabIndex={-1}>
            <TableCell align="center" width={20}> { ind + 1 } </TableCell>
            <TableCell align="left"> { item.item_name } </TableCell>
            <TableCell align="left"> { item.item_price } </TableCell>
            <TableCell align="center"> 
                <Stack direction="row" spacing={1}>
                    <IconButton color="warning" aria-label="delete" onClick={handleEdit}>
                        <Edit />
                    </IconButton>
                    <IconButton color="error" aria-label="delete" onClick={() => deleteItem(ind)}>
                        <Delete />
                    </IconButton>                    
                </Stack>
            </TableCell>
        </TableRow>
    )
}

export default function ItemTable({ items, setItems, setItemIndex }) {

    const deleteItem = (ind) => {
        if( window.confirm('Are you sure to delete ?') ){
            items.splice(ind, 1);
            setItems([...items]);

            localStorage.setItem(itemsKey, JSON.stringify(items));
        }
    }

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
                                deleteItem={deleteItem}
                                setItemIndex={setItemIndex}
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
