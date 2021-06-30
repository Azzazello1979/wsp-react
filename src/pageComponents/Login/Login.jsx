import classes from './Login.module.css';
import LoginRegisterForm from '../../reusableComponents/LoginRegisterForm/LoginRegisterForm';
import { useSelector } from 'react-redux';

const Login = () => {

    const userLoggedIn = useSelector(state => state.userLoggedIn);

    return (
        <div className={classes['login-wrapper']}>
            <LoginRegisterForm></LoginRegisterForm>
            <p>{userLoggedIn ? 'user logged in' : 'user logged out'}</p>
        </div>
    );
};

export default Login;