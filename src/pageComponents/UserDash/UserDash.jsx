import UtilityBar from "../../reusableComponents/UtilityBar/UtilityBar";
import ProductsListing from "../../reusableComponents/ProductsListing/ProductsListing";
import classes from './UserDash.module.css';

const UserDash = () => {
    return (
        <div className={classes['user-dash-wrapper']} >
            <UtilityBar></UtilityBar>
            <ProductsListing></ProductsListing>
        </div>
    );
};

export default UserDash;