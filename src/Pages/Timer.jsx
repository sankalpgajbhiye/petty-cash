import React, { useState, useEffect, useRef, useContext } from 'react';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";

import { UserContext } from '../UserContext';

export default function Timer() {

    const [ time, setTime ] = useState(0);
    const [ isActive, setIsActive ] = useState(false);

    const { globalItem } = useContext(UserContext);

    const fileInputRef = useRef();

    const handleToggle = () => {
        setIsActive(!isActive);
    }

    const handleReset = () => {
        setTime(0);
        setIsActive(false);
    }

    const openFilePopUp = () => {
        console.log('from open file', fileInputRef.current.click());
    }

    useEffect(() => {
        let interval = null;

        // console.log(globalItem);

        if (isActive) {
            interval = setInterval(() => {
                setTime(time => time + 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isActive])

    return (
        <div>
            <h1>Time : {time}</h1>
            <Button color='success' variant="outlined" onClick={handleToggle}>{ isActive ? 'Pause' : 'Start' }</Button>{ ` ` }
            <Button color='error' variant="outlined" onClick={handleReset} >Reset </Button>  { ` ` }
            
            <Link to="login">
                <Button color='error' variant="outlined">Login </Button>
            </Link>

            <input ref={fileInputRef} type="file" style={{display: 'none'}}/>
            <Button color='warning' variant="outlined" onClick={openFilePopUp}>Upload </Button>
        </div>
    )
}
