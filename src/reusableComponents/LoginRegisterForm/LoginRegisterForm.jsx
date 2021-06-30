import classes from './LoginRegisterForm.module.css';
import useInput from '../../customHooks/use-input';
import { emailValidatorFn, passwordValidatorFn } from '../../utils/validatorFunctions';
import { apiBase, localApi } from '../../constants/constants';

const LoginRegisterForm = () => {

    const {
        value: email,
        hasError: emailHasError,
        inputChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
    } = useInput(emailValidatorFn);

    const {
        value: password,
        hasError: passwordHasError,
        inputChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        reset: resetPassword,
    } = useInput(passwordValidatorFn);

    const formIsValid = !emailHasError && !passwordHasError;

    const submitHandler = async (e) => {
        e.preventDefault();

        const userObj = {
            action: 'register',
            email,
            password,
        };

        fetch(`${localApi}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userObj)
        })
            .then(async (response) => await response.json())
            .then(data => console.log(data))
            .catch(err => alert(err.message));

        resetEmail();
        resetPassword();

    };

    return (
        <div className={classes['login-register-form-wrapper']}>
            <form onSubmit={submitHandler}>

                <div className={classes['form-control-group']}>
                    <label htmlFor="email">email</label>
                    <input type="email" id="email" value={email} onChange={emailChangeHandler} onBlur={emailBlurHandler} />
                    {emailHasError && <p>Email has error.</p>}
                </div>

                <div className={classes['form-control-group']}>
                    <label htmlFor="password">password</label>
                    <input type="password" id="password" value={password} onChange={passwordChangeHandler} onBlur={passwordBlurHandler} />
                    {passwordHasError && <p>Password has error.</p>}
                </div>

                <div className={classes['form-control-group']}>
                    <button type="submit" disabled={!formIsValid} >Submit</button>
                </div>
            </form>
        </div>
    );
};

export default LoginRegisterForm;