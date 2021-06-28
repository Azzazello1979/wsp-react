import classes from './index.module.css';
import { NavLink } from 'react-router-dom';

const MainNav = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/login" activeClassName={classes.active}>Login</NavLink></li>
                <li><NavLink to="/dashboard" activeClassName={classes.active}>Dashboard</NavLink></li>
                <li><NavLink to="/admin" activeClassName={classes.active}>Admin</NavLink></li>
            </ul>
        </nav>
    );
};

export default MainNav;