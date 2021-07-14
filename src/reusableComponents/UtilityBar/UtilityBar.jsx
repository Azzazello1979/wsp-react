import { Fragment } from 'react';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import HistoryIcon from '@material-ui/icons/History';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FaceIcon from '@material-ui/icons/Face';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import GroupIcon from '@material-ui/icons/Group';
import BackupIcon from '@material-ui/icons/Backup';
import EditIcon from '@material-ui/icons/Edit';

import { useState } from 'react';
import classes from './UtilityBar.module.css';

import { useLocation, useHistory } from 'react-router-dom';

const UtilityBar = () => {

    const location = useLocation();
    const history = useHistory();

    const [utilityBarMode] = useState(location.pathname.includes('/admin') ? 'admin' : 'user'); // 'user' OR 'admin'
    const [value, setValue] = useState(utilityBarMode === 'user' ? '/dashboard' : '/admin');

    const handleChange = (event, newValue) => {
        setValue(newValue);
        history.push(newValue);
    };


    const bottomNavigationActionClasses = {
        root: classes['bottom-navigation-action-root'],
        selected: classes['selected'],
    };

    const userMode = <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction classes={bottomNavigationActionClasses} label="Home" value="/dashboard" icon={<HomeIcon />} selected />
        <BottomNavigationAction classes={bottomNavigationActionClasses} label="Products" value="/dashboard/products" icon={<DashboardIcon />} />
        <BottomNavigationAction classes={bottomNavigationActionClasses} label="Favorites" value="/dashboard/favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction classes={bottomNavigationActionClasses} label="Orders" value="/dashboard/orders" icon={<HistoryIcon />} />
        <BottomNavigationAction classes={bottomNavigationActionClasses} label="User" value="/dashboard/user-profile" icon={<FaceIcon />} />
        <BottomNavigationAction classes={bottomNavigationActionClasses} label="Cart" value="/dashboard/cart" icon={<ShoppingCartIcon />} />
    </BottomNavigation>;

    const adminMode = <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction classes={bottomNavigationActionClasses} label="Admin Home" value="/admin" icon={<HomeIcon />} selected />
        <BottomNavigationAction classes={bottomNavigationActionClasses} label="Edit Users" value="/admin/edit-users" icon={<GroupIcon />} />
        <BottomNavigationAction classes={bottomNavigationActionClasses} label="Upload Products" value="/admin/upload-products" icon={<BackupIcon />} />
        <BottomNavigationAction classes={bottomNavigationActionClasses} label="Edit Products" value="/admin/edit-products" icon={<EditIcon />} />
    </BottomNavigation>;

    return (
        <Fragment>
            {utilityBarMode === 'user' ? userMode : adminMode}
        </Fragment>
    );
};

export default UtilityBar;