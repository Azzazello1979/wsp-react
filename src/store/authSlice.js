import { createSlice } from '@reduxjs/toolkit';
import { DEV_API_BASE } from './../constants/constants';
import axios from 'axios';
import { axiosErrorHandler } from './../utils/axiosErrorHandler';
import { AXIOS_STATE } from './../constants/constants';


// AUTH...
const authInitialState = {
    userLoggedIn: !!localStorage.getItem('WSP-token'),
    userEmail: null,
    axiosCode: null,
};
const authSlice = createSlice({
    name: 'authSlice',
    initialState: authInitialState,
    reducers: {
        register(state, action) {
            state.userLoggedIn = !!localStorage.getItem('WSP-token');
            state.userEmail = action.payload;
            state.axiosCode = AXIOS_STATE.NEWLY_REGISTERED;
        },
        login(state, action) {
            state.userLoggedIn = !!localStorage.getItem('WSP-token');
            state.userEmail = action.payload;
            state.axiosCode = AXIOS_STATE.LOGGED_IN;
        },
        logout(state) {
            localStorage.removeItem('WSP-token');
            state.userLoggedIn = false;
            state.userEmail = null;
            state.axiosCode = AXIOS_STATE.LOGGED_OUT;
        },
        setError(state, action) {
            state.axiosCode = action.payload;
        }
    }
});

// register thunk...
const register = ({ email, password }) => {
    return (dispatch) => {

        //update backend
        const userObj = {
            email,
            password,
        };

        axios.post(`${DEV_API_BASE}/users/register`, userObj)
            .then(response => {
                console.log(response);
                //update redux
                localStorage.setItem('WSP-token', response.data);
                dispatch(authActionCreators.register(email));

            })
            .catch(err => {
                const errorCode = axiosErrorHandler(err);
                dispatch(authActionCreators.setError(errorCode));
            })

    };
};

// login thunk...
const login = ({ email, password }) => {
    return (dispatch) => {

        //update backend
        const userObj = {
            email,
            password,
        };

        axios.post(`${DEV_API_BASE}/users/login`, userObj)
            .then(response => {
                console.log(response);
                //update redux
                localStorage.setItem('WSP-token', response.data);
                dispatch(authActionCreators.login(email));

            })
            .catch(err => {
                const errorCode = axiosErrorHandler(err);
                dispatch(authActionCreators.setError(errorCode));
            })

    };
};



export const authThunkCreators = { register, login };
export const authActionCreators = authSlice.actions;
export default authSlice.reducer;