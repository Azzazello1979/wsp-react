import { createSlice } from '@reduxjs/toolkit';
import { DEV_API_BASE } from './../constants/constants';

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
    return async (dispatch) => {

        //update redux
        dispatch(authActionCreators.register(email));
        //update redux

        const saveUser = async () => {
            const userObj = {
                action: 'register',
                email,
                password,
            };

            fetch(`${DEV_API_BASE}/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userObj)
            })
                .then(async (response) => await response.json())
                .then(data => {
                    console.log(data);


                })
                .catch(err => alert(err.message));
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