import classes from './Admin.module.css';
import { Route, useLocation } from 'react-router-dom';

import UtilityBar from "../../reusableComponents/UtilityBar/UtilityBar";
import AdminLanding from './AdminLanding/AdminLanding';
import EditUsers from './EditUsers/EditUsers';
import UploadProducts from './UploadProducts/UploadProducts';
import EditProducts from './EditProducts/EditProducts';

const Admin = () => {

    const location = useLocation();

    return (
        <div>
            <UtilityBar></UtilityBar>

            {location.pathname === '/admin' && <AdminLanding></AdminLanding>}

            <Route path="/admin/edit-users">
                <EditUsers></EditUsers>
            </Route>
            <Route path="/admin/upload-products">
                <UploadProducts></UploadProducts>
            </Route>
            <Route path="/admin/edit-products">
                <EditProducts></EditProducts>
            </Route>

        </div>
    );
};

export default Admin;