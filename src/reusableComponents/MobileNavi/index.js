import classes from './index.module.css';
import MainNavi from '../MainNavi';
import React from 'react';

const MobileNavi = ({ visible, x, y }) => {

    //console.log(visible);
    console.log(`menu x:${x} y:${y}`);

    let wrapperStyle = {
        display: visible ? 'block' : 'none',
        top: `${y}px`,
        left: `${x}px`,
    };

    return (
        <div className={classes['mobile-navi-wrapper']}
            style={{ ...wrapperStyle }}>
            <div className={classes['navigation-wrapper']}>
                <MainNavi></MainNavi>
            </div>
        </div>
    );
};

export default MobileNavi;