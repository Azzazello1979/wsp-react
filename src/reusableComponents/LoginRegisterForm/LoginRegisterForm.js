import classes from './LoginRegisterForm.module.css';
import { useState } from 'react';

const LoginRegisterForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailChangeHandler = e => {
        setEmail(e.target.value);
    };

    const passwordChangeHandler = e => {
        setPassword(e.target.value);
    };

    const submitHandler = e => {
        e.preventDefault();
        console.log(`email - ${email}, password - ${password}`);

        setEmail('');
        setPassword('');
    };

    return (
        <div className={classes['login-register-form-wrapper']}>
            <form onSubmit={submitHandler}>

                <div className={classes['form-control-group']}>
                    <label htmlFor="email">email</label>
                    <input type="email" id="email" value={email} onChange={emailChangeHandler} />
                </div>

                <div className={classes['form-control-group']}>
                    <label htmlFor="password">password</label>
                    <input type="password" id="password" value={password} onChange={passwordChangeHandler} />
                </div>

                <div className={classes['form-control-group']}>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default LoginRegisterForm;