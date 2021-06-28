import classes from './index.module.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className={classes['footer-wrapper']}>
            <div className="text-centered">React Webshop Project 2021 - all rights reserved</div>
            <div className={classes['footer-buttons']}>
                <NavLink to="/login" activeClassName={classes.active}><button>Login</button></NavLink>
                <NavLink to="/dashboard" activeClassName={classes.active}><button>Dashboard</button></NavLink>
                <NavLink to="/admin" activeClassName={classes.active}><button>Admin</button></NavLink>
                <NavLink to="/about" activeClassName={classes.active}><button>About</button></NavLink>
            </div>
        </div>
    );
};
export default Footer;