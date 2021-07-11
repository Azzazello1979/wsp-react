import classes from './UserDash.module.css';
import { Route, useLocation } from 'react-router-dom';

import UtilityBar from "../../reusableComponents/UtilityBar/UtilityBar";
import ProductsListing from "../../reusableComponents/ProductsListing/ProductsListing";
import Cart from './Cart/Cart';
import Landing from './Landing/Landing';
import Favorites from './Favorites/Favorites';
import Orders from './Orders/Orders';
import EditUser from './EditUser/EditUser';


const UserDash = () => {

    const location = useLocation();

    return (
        <div className={classes['user-dash-wrapper']} >
            <UtilityBar></UtilityBar>

            {location.pathname === '/dashboard' && <Landing></Landing>}

            <Route path="/dashboard/products">
                <ProductsListing></ProductsListing>
            </Route>
            <Route path="/dashboard/favorites">
                <Favorites></Favorites>
            </Route>
            <Route path="/dashboard/orders">
                <Orders></Orders>
            </Route>
            <Route path="/dashboard/editUser">
                <EditUser></EditUser>
            </Route>
            <Route path="/dashboard/cart">
                <Cart></Cart>
            </Route>

        </div>
    );
};

export default UserDash;