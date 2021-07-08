import { createSlice } from '@reduxjs/toolkit';

const uiInitialState = {
    snackbarOpen: false,
};

const uiSlice = createSlice({
    name: 'uiSlice',
    initialState: uiInitialState,
    reducers: {
        snackbarOpen(state, action) {
            state.snackbarOpen = true;

        },
        snackbarClose(state, action) {
            state.snackbarOpen = false;
        },
        snackbarToggle(state) {
            state.snackbarOpen = !state.snackbarOpen;
        }
    },
});

export const uiActionCreators = uiSlice.actions;
export default uiSlice.reducer;
