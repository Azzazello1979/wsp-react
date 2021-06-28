import classes from './index.module.css';
import HorizontalNavi from './../HorizontalNavi';
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
                <HorizontalNavi></HorizontalNavi>
            </div>
        </div>
    );
};

export default MobileNavi;