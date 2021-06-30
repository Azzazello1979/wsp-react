import { configureStore } from '@reduxjs/toolkit';

import authSliceReducer from './authSlice';
import productsSliceReducer from './authSlice';
import usersSliceReducer from './usersSlice';


const store = configureStore({
    reducer: {
        authSlice: authSliceReducer,
        productsSlice: productsSliceReducer,
        usersSlice: usersSliceReducer,
    }
});


export default store;