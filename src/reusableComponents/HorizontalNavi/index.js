import classes from './index.module.css';
import { NavLink } from 'react-router-dom';
import React from 'react';

const HorizontalNavi = () => {
    return (
        <React.Fragment>
            <NavLink to="/login" activeClassName={classes.active}><button>Login</button></NavLink>
            <NavLink to="/dashboard" activeClassName={classes.active}><button>Dashboard</button></NavLink>
            <NavLink to="/admin" activeClassName={classes.active}><button>Admin</button></NavLink>
            <NavLink to="/about" activeClassName={classes.active}><button>About</button></NavLink>
        </React.Fragment>
    );
};

export default HorizontalNavi;