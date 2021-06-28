import classes from './index.module.css';
import MainNavi from '../MainNavi';

const Footer = () => {
    return (
        <div className={classes['footer-wrapper']}>
            <div className="text-centered">React Webshop Project 2021 - all rights reserved</div>
            <div className={classes['navi-buttons']}>
                <MainNavi></MainNavi>
            </div>
        </div>
    );
};
export default Footer;