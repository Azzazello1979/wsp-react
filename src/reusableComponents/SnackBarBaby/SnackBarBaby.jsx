import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import classes from './SnackBarBaby.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { uiActionCreators } from './../../store/uiSlice';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SnackBarBaby = () => {
    const dispatch = useDispatch();

    const snackbarOpen = useSelector(state => state.uiSlice.snackbarOpen);

    const handleClose = () => {
        dispatch(uiActionCreators.snackbarClose());
    };

    return (

        <div className={classes['snackbar-wrapper']}>
            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    This is a success message!
                </Alert>
            </Snackbar>
        </div>

    );


};

export default SnackBarBaby;