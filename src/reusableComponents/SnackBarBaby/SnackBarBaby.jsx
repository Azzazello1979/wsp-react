import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import classes from './SnackBarBaby.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { uiActionCreators } from './../../store/uiSlice';
import { useState } from 'react';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SnackBarBaby = () => {
    const dispatch = useDispatch();

    const snackbarOpen = useSelector(state => state.uiSlice.snackbarOpen);
    const currentAxiosError = useSelector(state => state.authSlice.axiosErrorCode);

    const [alertText, setAlertText] = useState('');
    const [alertSeverity, setAlertSeverity] = useState('');

    const mapper = () => {
        // map axios error code to props
        if (currentAxiosError === 'EMAIL_TAKEN') {
            setAlertText('This email is already taken, please choose another one.');
            setAlertSeverity('error');

        } else if (currentAxiosError === 'PASSWORD_MISMATCH') {
            setAlertText('The password you entered does not match with the one we have on file for this user.');
            setAlertSeverity('error');

        } else if (currentAxiosError === 'NO_SUCH_EMAIL') {
            setAlertText('We have no such email on file. Did you forget your email?');
            setAlertSeverity('error');

        }
    };

    mapper();


    const handleClose = () => {
        dispatch(uiActionCreators.snackbarClose());
    };

    return (

        <div className={classes['snackbar-wrapper']}>
            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={alertSeverity}>
                    {alertText}
                </Alert>
            </Snackbar>
        </div>

    );


};

export default SnackBarBaby;

// <Alert severity=" error | warning | info | success "></Alert> 