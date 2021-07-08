import { createSlice } from '@reduxjs/toolkit';
import { DEV_API_BASE } from './../constants/constants';
import axios from 'axios';


// AUTH...
const authInitialState = {
    userLoggedIn: false,
    userEmail: null,
};
const authSlice = createSlice({
    name: 'authSlice',
    initialState: authInitialState,
    reducers: {
        register(state, action) {
            state.userLoggedIn = !!localStorage.getItem('WSP-token');
            state.userEmail = action.payload;
        },
        login(state, action) {
            state.userLoggedIn = !!localStorage.getItem('WSP-token');
            state.userEmail = action.payload;
        },
        logout(state) {
            localStorage.removeItem('WSP-token');
            state.userEmail = null;
        },
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
                localStorage.setItem('WSP-token', response.token);
                dispatch(authActionCreators.register(email));

            })
            .catch(err => console.log(err.message))

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
                localStorage.setItem('WSP-token', response.token);
                dispatch(authActionCreators.login(email));

            })
            .catch(err => console.log(err.message))

    };
};



export const authThunkCreators = { register, login };
export const authActionCreators = authSlice.actions;
export default authSlice.reducer;