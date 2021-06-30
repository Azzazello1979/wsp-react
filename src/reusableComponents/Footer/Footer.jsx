import classes from './Footer.module.css';
import MainNavi from '../MainNavi/MainNavi';

const Footer = () => {
    return (
        <div className={classes['footer-wrapper']}>
            <div className="text-centered">React Webshop Project 2021 - all rights reserved</div>
            <div className={classes['footer-navi-buttons-wrapper']}>
                <MainNavi buttonsWidth={'80%'}></MainNavi>
            </div>
        </div>
    );
};
export default Footer;