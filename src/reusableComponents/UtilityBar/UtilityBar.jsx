import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { useState } from 'react';
import classes from './UtilityBar.module.css';

const UtilityBar = () => {

    const [value, setValue] = useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation value={value} onChange={handleChange} classes={{ root: classes['bottom-navigation-root'] }} >
            <BottomNavigationAction classes={{ root: classes['bottom-navigation-action-root'], selected: classes.selected }} label="Recents" value="recents" icon={<RestoreIcon />} />
            <BottomNavigationAction classes={{ root: classes['bottom-navigation-action-root'], selected: classes.selected }} label="Favorites" value="favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction classes={{ root: classes['bottom-navigation-action-root'], selected: classes.selected }} label="Nearby" value="nearby" icon={<LocationOnIcon />} />
            <BottomNavigationAction classes={{ root: classes['bottom-navigation-action-root'], selected: classes.selected }} label="Folder" value="folder" icon={<FolderIcon />} />
        </BottomNavigation>
    );
};

export default UtilityBar;