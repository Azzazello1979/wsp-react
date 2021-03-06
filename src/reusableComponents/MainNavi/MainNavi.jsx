import classes from './MainNavi.module.css';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActionCreators } from '../../store/authSlice';

import Button from '@material-ui/core/Button';


const HorizontalNavi = (props) => {

    const isLoggedIn = useSelector(state => state.authSlice.userLoggedIn);
    const dispatch = useDispatch();

    const buttonStyle = {
        'width': props.buttonsWidth,
        'color': 'white',
    };

    const logoutHandler = () => {
        dispatch(authActionCreators.logout());
    }

    return (
        <React.Fragment>
            <NavLink to="/login" className={classes['main-navi-anchor']} activeClassName={classes.active}><Button variant="contained" color="primary" style={buttonStyle}>Login/Register</Button></NavLink>
            <NavLink to="/dashboard" className={classes['main-navi-anchor']} activeClassName={classes.active}><Button variant="contained" color="primary" style={buttonStyle}>Dashboard</Button></NavLink>
            <NavLink to="/admin" className={classes['main-navi-anchor']} activeClassName={classes.active}><Button variant="contained" color="primary" style={buttonStyle}>Admin</Button></NavLink>
            <NavLink to="/about" className={classes['main-navi-anchor']} activeClassName={classes.active}><Button variant="contained" color="primary" style={buttonStyle}>About</Button></NavLink>
            {isLoggedIn && <Button onClick={logoutHandler} variant="contained" color="primary" style={buttonStyle}>Logout</Button>}
        </React.Fragment>
    );
};

export default HorizontalNavi;