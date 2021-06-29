import classes from './index.module.css';
import { NavLink } from 'react-router-dom';
import React from 'react';

const HorizontalNavi = ({ buttonsWidth }) => {

    const buttonStyle = { 'width': buttonsWidth };

    return (
        <React.Fragment>
            <NavLink to="/login" activeClassName={classes.active}><button style={buttonStyle}>Login</button></NavLink>
            <NavLink to="/dashboard" activeClassName={classes.active}><button style={buttonStyle}>Dashboard</button></NavLink>
            <NavLink to="/admin" activeClassName={classes.active}><button style={buttonStyle}>Admin</button></NavLink>
            <NavLink to="/about" activeClassName={classes.active}><button style={buttonStyle}>About</button></NavLink>
        </React.Fragment>
    );
};

export default HorizontalNavi;