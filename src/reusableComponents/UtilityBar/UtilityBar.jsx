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

    const [utilityBarMode] = useState(location.pathname === '/admin' ? 'admin' : 'user'); // 'user' OR 'admin'
    const [value, setValue] = useState(utilityBarMode === 'user' ? 'home' : 'users');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const bottomNavigationActionClasses = {
        root: classes['bottom-navigation-action-root'],
        selected: classes['selected'],
    };

    const userMode = <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction classes={bottomNavigationActionClasses} label="Home" value="home" icon={<HomeIcon />} />
        <BottomNavigationAction classes={bottomNavigationActionClasses} label="Filter" value="filter" icon={<FilterListIcon />} />
        <BottomNavigationAction classes={bottomNavigationActionClasses} label="Favorites" value="favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction classes={bottomNavigationActionClasses} label="Orders" value="history" icon={<HistoryIcon />} />
        <BottomNavigationAction classes={bottomNavigationActionClasses} label="User" value="user" icon={<FaceIcon />} />
        <BottomNavigationAction classes={bottomNavigationActionClasses} label="Cart" value="cart" icon={<ShoppingCartIcon />} />
    </BottomNavigation>;

    const adminMode = <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction classes={bottomNavigationActionClasses} label="Users" value="users" icon={<GroupIcon />} />
        <BottomNavigationAction classes={bottomNavigationActionClasses} label="Upload Products" value="upload" icon={<BackupIcon />} />
        <BottomNavigationAction classes={bottomNavigationActionClasses} label="Edit Products" value="edit" icon={<EditIcon />} />
    </BottomNavigation>;

    return (
        <Fragment>
            {utilityBarMode === 'user' ? userMode : adminMode}
        </Fragment>
    );
};

export default UtilityBar;