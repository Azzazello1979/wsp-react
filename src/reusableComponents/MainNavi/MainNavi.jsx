import classes from './MainNavi.module.css';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { useDispatch } from 'react-redux';
import { authActionCreators } from '../../store/authSlice';

import Button from '@material-ui/core/Button';

const HorizontalNavi = (props) => {

    const dispatch = useDispatch();

    const buttonStyle = { 'width': props.buttonsWidth };

    const logoutHandler = () => {
        dispatch(authActionCreators.logout());
    }

    return (
        <React.Fragment>
            <NavLink to="/login" className={classes['main-navi-anchor']} activeClassName={classes.active}><Button variant="contained" color="primary" style={buttonStyle}>Login/Register</Button></NavLink>
            <NavLink to="/dashboard" className={classes['main-navi-anchor']} activeClassName={classes.active}><Button variant="contained" color="primary" style={buttonStyle}>Dashboard</Button></NavLink>
            <NavLink to="/admin" className={classes['main-navi-anchor']} activeClassName={classes.active}><Button variant="contained" color="primary" style={buttonStyle}>Admin</Button></NavLink>
            <NavLink to="/about" className={classes['main-navi-anchor']} activeClassName={classes.active}><Button variant="contained" color="primary" style={buttonStyle}>About</Button></NavLink>
            <NavLink onClick={logoutHandler} to="/login" className={classes['main-navi-anchor']} activeClassName={classes.active}><Button variant="contained" color="primary" style={buttonStyle}>Logout</Button></NavLink>
        </React.Fragment>
    );
};

export default HorizontalNavi;