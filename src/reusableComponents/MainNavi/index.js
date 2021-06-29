import classes from './index.module.css';
import { NavLink } from 'react-router-dom';
import React from 'react';

const HorizontalNavi = ({ buttonsWidth }) => {
    return (
        <React.Fragment>
            <NavLink to="/login" activeClassName={classes.active}><button style={{ 'width': buttonsWidth }}>Login</button></NavLink>
            <NavLink to="/dashboard" activeClassName={classes.active}><button style={{ 'width': buttonsWidth }}>Dashboard</button></NavLink>
            <NavLink to="/admin" activeClassName={classes.active}><button style={{ 'width': buttonsWidth }}>Admin</button></NavLink>
            <NavLink to="/about" activeClassName={classes.active}><button style={{ 'width': buttonsWidth }}>About</button></NavLink>
        </React.Fragment>
    );
};

export default HorizontalNavi;