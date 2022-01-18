import React, { useState, useEffect } from 'react';

// item components imported 
import ItemForm from './ItemForm';
import ItemTable from './ItemTable';

import { itemsKey } from '../../constant';
import AuthLayout from '../../Layout/AuthLayout';

export default function Index() {

    const [items, setItems] = useState([]);
    const [itemIndex, setItemIndex] = useState("");

    useEffect(() => {
        if( localStorage.getItem(itemsKey) !== null ) {
            const storageItems = JSON.parse(localStorage.getItem(itemsKey));
            setItems([...storageItems]);
        }
    }, [])

    return (
        <AuthLayout align="left">
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
        </AuthLayout>
    )
}
