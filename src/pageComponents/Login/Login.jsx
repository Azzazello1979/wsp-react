import classes from './Login.module.css';
import LoginRegisterForm from '../../reusableComponents/LoginRegisterForm/LoginRegisterForm';

const Login = () => {
    return (
        <div className={classes['login-wrapper']}>
            <LoginRegisterForm></LoginRegisterForm>
        </div>
    );
};

export default Login;