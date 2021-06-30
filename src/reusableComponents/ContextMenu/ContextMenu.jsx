import classes from './ContextMenu.module.css';
import MainNavi from '../MainNavi/MainNavi';
import React from 'react';

const ContextMenu = ({ visible, x, y }) => {

    let wrapperStyle = {
        opacity: visible ? 1 : 0,
        transform: visible ? 'scale(100%)' : 'scale(0%)',
        top: `${y}px`,
        left: `${x}px`,
    };

    return (
        <div className={classes['mobile-navi-wrapper']}
            style={{ ...wrapperStyle }}>
            <div className={classes['navigation-wrapper']}>
                <MainNavi buttonsWidth={'100%'}></MainNavi>
            </div>
        </div>
    );
};

export default ContextMenu;