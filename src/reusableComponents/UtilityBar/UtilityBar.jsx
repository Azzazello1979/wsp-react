import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import HistoryIcon from '@material-ui/icons/History';
import FaceIcon from '@material-ui/icons/Face';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FilterListIcon from '@material-ui/icons/FilterList';

import { useState } from 'react';
import classes from './UtilityBar.module.css';

const UtilityBar = () => {

    const [value, setValue] = useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation value={value} onChange={handleChange}>
            <BottomNavigationAction classes={{ root: classes['bottom-navigation-action-root'], selected: classes.selected }} label="Home" value="home" icon={<HomeIcon />} />
            <BottomNavigationAction classes={{ root: classes['bottom-navigation-action-root'], selected: classes.selected }} label="Filter" value="filter" icon={<FilterListIcon />} />
            <BottomNavigationAction classes={{ root: classes['bottom-navigation-action-root'], selected: classes.selected }} label="Favorites" value="favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction classes={{ root: classes['bottom-navigation-action-root'], selected: classes.selected }} label="Orders" value="history" icon={<HistoryIcon />} />
            <BottomNavigationAction classes={{ root: classes['bottom-navigation-action-root'], selected: classes.selected }} label="User" value="user" icon={<FaceIcon />} />
            <BottomNavigationAction classes={{ root: classes['bottom-navigation-action-root'], selected: classes.selected }} label="Cart" value="cart" icon={<ShoppingCartIcon />} />
        </BottomNavigation>
    );
};

export default UtilityBar;