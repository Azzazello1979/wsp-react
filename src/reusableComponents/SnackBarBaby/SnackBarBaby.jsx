import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import classes from './SnackBarBaby.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { uiActionCreators } from './../../store/uiSlice';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SnackBarBaby = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const currentAxiosCode = useSelector(state => state.authSlice.axiosCode);
    const userEmail = useSelector(state => state.authSlice.userEmail);
    const snackbarOpen = useSelector(state => state.uiSlice.snackbarOpen);

    const [alertText, setAlertText] = useState('yolo');
    const [alertSeverity, setAlertSeverity] = useState('success');

    useEffect(() => {

        // map axios code to props
        console.log('mapper runs');

        if (currentAxiosCode) {

            // open snackbar
            dispatch(uiActionCreators.snackbarOpen());

            if (currentAxiosCode === 'EMAIL_TAKEN') {
                setAlertText('This email is already taken, please choose another one.');
                setAlertSeverity('error');

            } else if (currentAxiosCode === 'PASSWORD_MISMATCH') {
                setAlertText('The password you entered does not match with the one we have on file for this user.');
                setAlertSeverity('error');

            } else if (currentAxiosCode === 'NO_SUCH_EMAIL') {
                setAlertText('We have no such email on file. Did you forget your email?');
                setAlertSeverity('error');

            } else if (currentAxiosCode === 'NEWLY_REGISTERED') {
                setAlertText(`Welcome ${userEmail}`);
                setAlertSeverity('success');
                history.replace('/dashboard');

            } else if (currentAxiosCode === 'LOGGED_IN') {
                setAlertText(`Welcome back ${userEmail}`);
                setAlertSeverity('success');
                history.replace('/dashboard');

            } else if (currentAxiosCode === 'LOGGED_OUT') {
                setAlertText('See you soon!');
                setAlertSeverity('info');
                history.replace('/login');

            } else {
                return;
            }

        }



    }, [currentAxiosCode]);

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