import { createSlice } from '@reduxjs/toolkit';

// AUTH...
const authInitialState = {
    userLoggedIn: false
};
const authSlice = createSlice({
    name: 'authSlice',
    initialState: authInitialState,
    reducers: {
        login(state) {
            state.userLoggedIn = true;
        },
        logout(state) {
            state.userLoggedIn = false;
        },
    }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;