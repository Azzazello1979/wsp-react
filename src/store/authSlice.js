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
            state.userLoggedIn = true;
            state.userEmail = action.payload;
        },
        login(state) {
            state.userLoggedIn = true;
        },
        logout(state) {
            state.userLoggedIn = false;
            state.userEmail = null;
        },
    }
});

// this is a thunk...
const register = ({ email, password }) => {
    return (dispatch) => {

        //update redux
        dispatch(authActionCreators.register(email));
        //update redux

        const saveUser = () => {
            const userObj = {
                action: 'register',
                email,
                password,
            };

            axios.post(`${DEV_API_BASE}/users`, userObj)
                .then(response => console.log(response))
                .catch(err => alert(err))

        };

        try {
            saveUser();
        } catch (err) {
            alert(err);
        }

    };
};

export const authThunkCreators = { register };
export const authActionCreators = authSlice.actions;
export default authSlice.reducer;