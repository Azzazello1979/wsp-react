import classes from './index.module.css';
import { NavLink } from 'react-router-dom';

const HorizontalNavi = () => {
    return (
        <div className={classes['navi-buttons']}>
            <NavLink to="/login" activeClassName={classes.active}><button>Login</button></NavLink>
            <NavLink to="/dashboard" activeClassName={classes.active}><button>Dashboard</button></NavLink>
            <NavLink to="/admin" activeClassName={classes.active}><button>Admin</button></NavLink>
            <NavLink to="/about" activeClassName={classes.active}><button>About</button></NavLink>
        </div>
    );
};

export default HorizontalNavi;