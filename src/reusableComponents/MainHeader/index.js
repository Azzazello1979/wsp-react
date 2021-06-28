import classes from './index.module.css';
import MainNav from './../MainNav';

const MainHeader = () => {
    return (
        <div className={`wrapper ${classes['main-nav-wrapper']}`}>
            <MainNav></MainNav>
        </div>
    );
};

export default MainHeader;