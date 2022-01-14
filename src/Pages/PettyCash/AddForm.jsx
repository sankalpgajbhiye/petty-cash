import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { TextField, Button, MenuItem, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";

import { itemsKey, pettyCashKey } from '../../constant';

const AddFormInput = ({allItems, item, ind, values, setValues}) => {
    // console.log(item);
    const { item_id, quantity, price, total } = item;

    // const handleItemChange = (e) => {
    //     const { name, value} = e.target;
    
    //     if( value !== "" ) {
    //         const selectedItem = allItems.find((item) => item.item_name === value);
    //         // console.log(selectedItem);
    //         item.item_id = value;
    //         item.price = selectedItem.item_price;
    //         item.total = parseFloat(quantity) * parseFloat(selectedItem.item_price);

    //         values.all_items[ind] = item;

    //         let new_total_amount = 0;

    //         values.all_items.forEach(itm => {
    //             new_total_amount += parseFloat(itm.total);
    //         });

    //         values.total_amount = new_total_amount;

    //         setValues({...values});
    //     }
    // }

    const handleChange = (e) => {
        const { name, value} = e.target;

        item[name] = value;

        if( name === 'item_id' ) {
            const selectedItem = allItems.find((item) => item.item_name === value);
            item.price = selectedItem.item_price;
        }

        const { item_id, price, quantity } = item;

        if(item_id === '') return window.alert('Please select item first');

        item.total = parseFloat(quantity) * parseFloat(price);

        values.all_items[ind] = item;

        let new_total_amount = 0;

        values.all_items.forEach(itm => {
            new_total_amount += parseFloat(itm.total);
        });

        values.total_amount = new_total_amount;

        setValues({...values});
    }

    const handleDeleteRow = () => {
        if( window.confirm('Are you sure to delete ?') ){
            // items.splice(ind, 1);
            values.all_items.splice(ind, 1);

            let new_total_amount = 0;

            values.all_items.forEach(itm => {
                new_total_amount += parseFloat(itm.total);
            });

            values.item_count = values.all_items.length;            
            values.total_amount = new_total_amount;

            setValues({...values});
        }
    }

    return (
        <>
            <Grid item xs={3}>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    size="small"
                    name="item_id"
                    fullWidth
                    value={item_id}
                    onChange={handleChange}
                >
                    {allItems?.map((item,i) => (
                        <MenuItem key={i} value={item.item_name}>
                            {item.item_name}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={2}>
                <TextField
                    label="Quantity"
                    variant="outlined"
                    name="quantity"
                    size="small"
                    type="number"
                    value={quantity}
                    onChange={handleChange} 
                // error={errors.item_name !== undefined}
                // helperText={errors?.item_name}
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
                    label="Price"
                    variant="outlined"
                    name="price"
                    size="small"
                    value={price}
                    onChange={handleChange} 
                // error={errors.item_price !== undefined}
                // helperText={errors?.item_price}
                />
            </Grid>
            <Grid item xs={3}>
                <TextField
                    label="Total"
                    variant="outlined"
                    name="total"
                    size="small"
                    value={total}
                    onChange={handleChange}
                    disabled 
                // error={errors.item_price !== undefined}
                // helperText={errors?.item_price}
                />
            </Grid>
            <Grid item xs={1}>
                <IconButton color="error" aria-label="delete" onClick={handleDeleteRow}>
                    <Delete />
                </IconButton>  
            </Grid>
        </>
    );
}

export default function AddForm() {

    const formObj = {
        entry_date: "",
        item_count: 0,
        total_amount: 0,
        all_items: []
    }

    let navigate = useNavigate();

    const [ values, setValues ] = useState(formObj);

    const [ pettyCashEntries, setPettyCashEntries ] = useState([]);

    const storageItems = JSON.parse(localStorage.getItem(itemsKey));

    const [allItems, setAllItems] = useState(storageItems);

    const handleChange = (e) => {
        const { name, value} = e.target;

        setValues({
            ...values,
            [name]: value
        })
    }

    const addRow = () => {

        const item_form_obj = {
            item_id: "",
            quantity: 1,
            price: 0,
            total: 0
        };

        values.all_items.push(item_form_obj);
        values.item_count = values.all_items.length;

        setValues({
            ...values
        })
        // pettyCashItems.push({});
        // setPettyCashItems([...pettyCashItems]);
    }

    const savePettyCash = () => {
        // console.log(values);
        pettyCashEntries.push(values);
        setPettyCashEntries([...pettyCashEntries]);

        localStorage.setItem(pettyCashKey, JSON.stringify(pettyCashEntries));
        navigate(`/pettycash`);
    }

    useEffect(() => {
        if( localStorage.getItem(pettyCashKey) !== null ) {
            const storagePettyCashEntries = JSON.parse(localStorage.getItem(pettyCashKey));
            setPettyCashEntries([...storagePettyCashEntries]);
        }
    }, [])
        
    return (
        <>
            <Grid container spacing={2}>

                <Grid item xs={3}>
                    <TextField
                        label="Date"
                        variant="outlined"
                        name="entry_date"
                        size="small"
                        type="date"
                        value={values.entry_date}
                        onChange={handleChange} 
                        // error={errors.item_price !== undefined}
                        // helperText={errors?.item_price}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label="Item Count"
                        variant="outlined"
                        name="item_count"
                        size="small"
                        disabled
                        value={values.item_count}
                    // onChange={handleChange} 
                    // error={errors.item_price !== undefined}
                    // helperText={errors?.item_price}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label="Total Amount"
                        variant="outlined"
                        name="total_amount"
                        size="small"
                        disabled
                        value={values.total_amount}
                    // onChange={handleChange} 
                    // error={errors.item_price !== undefined}
                    // helperText={errors?.item_price}
                    />
                </Grid>
                <Grid item xs={3}>
                    <Button variant="outlined" color="success" onClick={addRow}> Add Item Row</Button>
                </Grid>

                { 
                    values.all_items.map((item, i) => 
                        <AddFormInput 
                            key={i}
                            item={item}
                            ind={i} 
                            allItems={allItems}
                            values={values}
                            setValues={setValues}
                        />
                    )
                }
                
                <Grid item xs={9}></Grid>
                <Grid item xs={3}>
                    { values.all_items.length > 0 && 
                        <Button variant="outlined" color="success" onClick={savePettyCash}> Save Entry</Button>
                    }
                </Grid>
            </Grid>
        </>
    )
}
