import classes from './MainNavi.module.css';
import { NavLink } from 'react-router-dom';
import React from 'react';

const HorizontalNavi = (props) => {

    const buttonStyle = { 'width': props.buttonsWidth };

    return (
        <React.Fragment>
            <NavLink to="/login" className={classes['main-navi-anchor']} activeClassName={classes.active}><button style={buttonStyle}>Login</button></NavLink>
            <NavLink to="/dashboard" className={classes['main-navi-anchor']} activeClassName={classes.active}><button style={buttonStyle}>Dashboard</button></NavLink>
            <NavLink to="/admin" className={classes['main-navi-anchor']} activeClassName={classes.active}><button style={buttonStyle}>Admin</button></NavLink>
            <NavLink to="/about" className={classes['main-navi-anchor']} activeClassName={classes.active}><button style={buttonStyle}>About</button></NavLink>
        </React.Fragment>
    );
};

export default HorizontalNavi;