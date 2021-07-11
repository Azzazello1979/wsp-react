import classes from './Dashboard.module.css';
import { Route, useLocation } from 'react-router-dom';

import UtilityBar from "../../reusableComponents/UtilityBar/UtilityBar";
import Landing from './Landing/Landing';
import ProductsListing from './ProductsListing/ProductsListing';
import Favorites from './Favorites/Favorites';
import Orders from './Orders/Orders';
import UserProfile from './UserProfile/UserProfile';
import Cart from './Cart/Cart';


const Dashboard = () => {

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
            <Route path="/dashboard/user-profile">
                <UserProfile></UserProfile>
            </Route>
            <Route path="/dashboard/cart">
                <Cart></Cart>
            </Route>

        </div>
    );
};

export default Dashboard;