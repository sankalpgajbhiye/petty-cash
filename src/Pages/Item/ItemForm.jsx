import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';

import { itemsKey } from '../../constant';

export default function ItemForm({ items, setItems, itemIndex, setItemIndex }) {

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

            if(itemIndex !== "") items[itemIndex] = values;
            if(itemIndex === "") items.push(values);

            setItems([...items]);

            localStorage.setItem(itemsKey, JSON.stringify(items));
            // reset current form inputs
            setValues(formObj);
            setItemIndex("");
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

    useEffect(() => {
        // console.log(items[itemIndex]);
        if( itemIndex !== "" ) {
            const currentItem = items[itemIndex];
            const newFormObj = { ...formObj }; // new object created using formobj
            for (const [key, value] of Object.entries(formObj)) {
                newFormObj[key] = currentItem[key];
            }            
            setValues(newFormObj);
        }
    }, [itemIndex])

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
            <Button variant="outlined" color="success" onClick={handleAdd}> { itemIndex !== "" ? 'Edit': 'Add' }</Button>
        </>
    )
}
