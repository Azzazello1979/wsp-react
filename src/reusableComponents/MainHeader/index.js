import classes from './index.module.css';
import HorizontalNavi from './../HorizontalNavi'

const MainHeader = () => {
    return (
        <div className={classes['main-header-wrapper']}>
            <div className={classes['navigation-wrapper']}>
                <HorizontalNavi></HorizontalNavi>
            </div>
        </div>
    );
};

export default MainHeader;