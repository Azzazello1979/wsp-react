import { useSelector } from 'react-redux';
import classes from './UsersListing.module.css';

const UsersListing = () => {

    const users = useSelector(state => state.usersSlice.users);

    return (
        <div className={classes['users-listing-wrapper']}>
            {users.map(u => <p key={u._id}>{u.email}</p>)}
        </div>
    );
};

export default UsersListing;