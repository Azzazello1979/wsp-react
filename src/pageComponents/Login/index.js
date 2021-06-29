import classes from './index.module.css';
import LoginRegisterForm from './../../reusableComponents/LoginRegisterForm';

const Login = () => {
    return (
        <div className={classes['login-wrapper']}>
            <LoginRegisterForm></LoginRegisterForm>
        </div>
    );
};

export default Login;