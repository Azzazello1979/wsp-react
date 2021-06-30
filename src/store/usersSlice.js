import { createSlice } from '@reduxjs/toolkit';

// USERS
const usersInitialState = {
    users: [
        { _id: 1, email: 'Baligno@awesome.com' },
        { _id: 2, email: 'Babino@awesome.com' },
        { _id: 3, email: 'Mazdino@awesome.com' },
    ]
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