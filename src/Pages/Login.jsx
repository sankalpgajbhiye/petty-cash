import React, { useState } from 'react';
import { Box, Grid, FormControl, TextField, Button, Card, CardContent } from '@mui/material';
import { useNavigate } from "react-router-dom";

export default function Login() {

    let navigate = useNavigate();

    const formObj = {
        email: "",
        password: ""
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

    const handleLogin = () => {
        if( validateForm() ) {
            // console.log(values);
            const userObj = {
                name: "abc user",
                age: 23,
                token: "xsyfdsuayddseww"
            }
            localStorage.setItem('user_data', JSON.stringify(userObj));
            navigate(`/dashboard`);
        }
    }

    const validateForm = () => {
        let newErrors = {};
        const { email, password } = values;
        if(email === "") newErrors.email = "Please enter email or mobile";
        if(password === "") newErrors.password = "Please enter password";
        
        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }

    return (
        <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
            <Grid container spacing={3}>
                <Grid item xs></Grid>
                <Grid item xs={6}>
                    <h3>Login Page</h3> 
                    <Card sx={{ minWidth: 275 }} variant="outlined">
                        <CardContent>
                            <FormControl fullWidth sx={{ m: 1 }}>
                                <TextField 
                                    label="Email Or Mobile" 
                                    variant="outlined"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange} 
                                    error={errors.email !== undefined}
                                    helperText={errors?.email}
                                />
                            </FormControl>

                            <FormControl fullWidth sx={{ m: 1 }}>
                                <TextField 
                                    label="Password"
                                    type="password" 
                                    variant="outlined" 
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange} 
                                    error={errors.password !== undefined}
                                    helperText={errors?.password}
                                />
                            </FormControl>

                            <FormControl sx={{ m: 1 }}>
                                <Button variant="outlined" onClick={handleLogin}>Login</Button>                   
                            </FormControl>                            
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs></Grid>
            </Grid>
        </Box>
    )
}
