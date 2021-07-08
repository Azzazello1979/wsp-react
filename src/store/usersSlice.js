import { createSlice } from '@reduxjs/toolkit';

// USERS
const usersInitialState = {
    users: []
};
const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: usersInitialState,
    reducers: {
        addUser(state, action) { // action.payload --> {...}
            state.users.push(action.payload);
        },
        setAllUsers(state, action) {
            state.users = action.payload;
        }
    }
});

export const userActions = usersSlice.actions;
export default usersSlice.reducer;