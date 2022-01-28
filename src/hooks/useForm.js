import { useState } from 'react';

export default function useForm(formObj) {

    const [ values, setValues ] = useState(formObj);

    const handleChange = (e) => {
        const { name, value} = e.target;

        setValues({
            ...values,
            [name]: value
        })
    }

    return {
        handleChange,
        values,
        setValues
    };
}
