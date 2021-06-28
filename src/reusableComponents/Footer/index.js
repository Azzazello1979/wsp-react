import classes from './index.module.css';
import HorizontalNavi from './../HorizontalNavi'

const Footer = () => {
    return (
        <div className={classes['footer-wrapper']}>
            <div className="text-centered">React Webshop Project 2021 - all rights reserved</div>
            <HorizontalNavi></HorizontalNavi>
        </div>
    );
};
export default Footer;