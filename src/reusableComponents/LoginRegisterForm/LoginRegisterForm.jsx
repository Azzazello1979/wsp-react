import classes from './LoginRegisterForm.module.css';
import useInput from '../../customHooks/use-input';
import { emailValidatorFn, passwordValidatorFn } from '../../utils/validatorFunctions';
import { useDispatch } from 'react-redux';
import { authActionCreators, authThunkCreators } from './../../store/authSlice';

import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';

const LoginRegisterForm = () => {

    const dispatch = useDispatch();

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

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(authThunkCreators.register({ email, password }));
        resetEmail();
        resetPassword();
    };

    return (
        <div className={classes['login-register-form-wrapper']}>
            <form onSubmit={submitHandler}>

                <div className={classes['form-control-group']}>
                    <TextField variant="outlined" label="email" type="email" id="email" value={email} onChange={emailChangeHandler} onBlur={emailBlurHandler} helperText={emailHasError ? 'Email has error' : ''} />
                </div>

                <div className={classes['form-control-group']}>
                    <TextField variant="outlined" label="password" type="password" id="password" value={password} onChange={passwordChangeHandler} onBlur={passwordBlurHandler} helperText={passwordHasError ? 'Password has error' : ''} />
                </div>

                <div className={classes['form-control-group']}>
                    <Button
                        type="submit"
                        disabled={!formIsValid}
                        variant="contained"
                        size="medium"
                        color="primary"
                        startIcon={<SaveIcon />}
                    >Register</Button>
                </div>
            </form>

        </div>
    );
};

export default LoginRegisterForm;