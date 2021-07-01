import classes from './Login.module.css';
import LoginRegisterForm from '../../reusableComponents/LoginRegisterForm/LoginRegisterForm';
import { useSelector } from 'react-redux';

const Login = () => {

    const userLoggedIn = useSelector(state => state.authSlice.userLoggedIn);
    const userEmail = useSelector(state => state.authSlice.userEmail);

    return (
        <div className={classes['login-wrapper']}>
            <LoginRegisterForm></LoginRegisterForm>
            <p>{userLoggedIn ? 'user logged in' : 'user logged out'}</p>
            <p>{userEmail}</p>
        </div>
    );
};

export default Login;