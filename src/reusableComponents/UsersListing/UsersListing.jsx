import { useSelector } from 'react-redux';

const UsersListing = () => {

    const users = useSelector(state => state.usersSlice.users);

    return (
        <div>
            {users.map(u => <p key={u._id}>{u.email}</p>)}
        </div>
    );
};

export default UsersListing;