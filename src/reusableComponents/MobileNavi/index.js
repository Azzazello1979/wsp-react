import classes from './index.module.css';
import HorizontalNavi from './../HorizontalNavi';
import React from 'react';

const MobileNavi = ({ visible, x, y }) => {

    //console.log(visible);
    console.log(`x:${x} y:${y}`);

    return (
        <div className={classes['mobile-navi-wrapper']}
            style={{ 'display': visible ? 'block' : 'none' }}>
            <div className={classes['navigation-wrapper']}>
                <HorizontalNavi></HorizontalNavi>
            </div>
        </div>
    );
};

export default MobileNavi;