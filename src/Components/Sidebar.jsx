import React from 'react';
import { Link } from "react-router-dom";
import { MenuList, MenuItem } from '@mui/material';
import { useNavigate } from "react-router-dom";

export default function Sidebar() {

    let navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user_data');
        navigate(`/`);
    }

    const linkClass = {
        textDecoration: "none",
        color: "unset"
    };

    return (
        <MenuList>
            <Link style={linkClass} to="/dashboard">
                <MenuItem>Dashboard </MenuItem>
            </Link> 
            <Link style={linkClass} to="/item">
                <MenuItem> Items</MenuItem>                
            </Link> 
            <Link style={linkClass} to="/pettycash">
                <MenuItem> Petty Cash Entry </MenuItem>
            </Link>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </MenuList>
    )
}
