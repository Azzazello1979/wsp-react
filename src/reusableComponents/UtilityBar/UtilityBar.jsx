import { Fragment } from 'react';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import HistoryIcon from '@material-ui/icons/History';
import FaceIcon from '@material-ui/icons/Face';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FilterListIcon from '@material-ui/icons/FilterList';

import GroupIcon from '@material-ui/icons/Group';
import BackupIcon from '@material-ui/icons/Backup';
import EditIcon from '@material-ui/icons/Edit';

import { useState } from 'react';
import classes from './UtilityBar.module.css';

import { useLocation } from 'react-router-dom';

const UtilityBar = () => {

    const location = useLocation();

    const [utilityBarMode, setUtilityBarMode] = useState(location.pathname === '/admin' ? 'admin' : 'user'); // 'user' OR 'admin'
    const [value, setValue] = useState('home');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const userMode = <Fragment>
        <BottomNavigationAction classes={{ root: classes['bottom-navigation-action-root'], selected: classes.selected }} label="Home" value="home" icon={<HomeIcon />} />
        <BottomNavigationAction classes={{ root: classes['bottom-navigation-action-root'], selected: classes.selected }} label="Filter" value="filter" icon={<FilterListIcon />} />
        <BottomNavigationAction classes={{ root: classes['bottom-navigation-action-root'], selected: classes.selected }} label="Favorites" value="favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction classes={{ root: classes['bottom-navigation-action-root'], selected: classes.selected }} label="Orders" value="history" icon={<HistoryIcon />} />
        <BottomNavigationAction classes={{ root: classes['bottom-navigation-action-root'], selected: classes.selected }} label="User" value="user" icon={<FaceIcon />} />
        <BottomNavigationAction classes={{ root: classes['bottom-navigation-action-root'], selected: classes.selected }} label="Cart" value="cart" icon={<ShoppingCartIcon />} />
    </Fragment>;

    const adminMode = <Fragment>
        <BottomNavigationAction classes={{ root: classes['bottom-navigation-action-root'], selected: classes.selected }} label="Users" value="users" icon={<GroupIcon />} />
        <BottomNavigationAction classes={{ root: classes['bottom-navigation-action-root'], selected: classes.selected }} label="Upload Products" value="upload" icon={<BackupIcon />} />
        <BottomNavigationAction classes={{ root: classes['bottom-navigation-action-root'], selected: classes.selected }} label="Edit Products" value="edit" icon={<EditIcon />} />
    </Fragment>;

    return (
        <BottomNavigation value={value} onChange={handleChange}>
            {utilityBarMode === 'user' ? userMode : adminMode}
        </BottomNavigation>
    );
};

export default UtilityBar;