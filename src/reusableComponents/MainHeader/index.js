import classes from './index.module.css';
import HorizontalNavi from './../HorizontalNavi'

const MainHeader = () => {
    return (
        <div className={classes['main-header-wrapper']}>
            <HorizontalNavi></HorizontalNavi>
        </div>
    );
};

export default MainHeader;