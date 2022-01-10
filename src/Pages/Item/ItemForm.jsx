import React, { useState } from 'react';
import { TextField, Button } from '@mui/material'

export default function ItemForm({ items, setItems }) {

    const formObj = {
        item_name: "",
        item_price: ""
    }

    const [ values, setValues ] = useState(formObj);
    const [ errors, setErrors ] = useState({});

    const handleChange = (e) => {
        const { name, value} = e.target;

        setValues({
            ...values,
            [name]: value
        })
    }

    const handleAdd = () => {        
        if( validateForm() ) {
            items.push(values);
            setItems([...items]);
            // reset current form inputs
            setValues(formObj);
        }
    }

    const validateForm = () => {
        let newErrors = {};
        const { item_name, item_price } = values;
        if(item_name === "") newErrors.item_name = "Please enter item name";
        if(item_price === "") newErrors.item_price = "Please enter item price";
        
        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }

    return (
        <>
            <TextField 
                label="Item Name" 
                variant="outlined"                
                name="item_name"
                size="small"
                value={values.item_name}
                onChange={handleChange} 
                error={errors.item_name !== undefined}
                helperText={errors?.item_name}
            /> {` `}
            
            <TextField 
                label="Item Price" 
                variant="outlined"
                name="item_price"
                size="small"
                value={values.item_price}
                onChange={handleChange} 
                error={errors.item_price !== undefined}
                helperText={errors?.item_price}
            /> {` `}
            <Button variant="outlined" color="success" onClick={handleAdd}>Add</Button>
        </>
    )
}
