import { configureStore } from '@reduxjs/toolkit';

import authSliceReducer from './authSlice';
import productsSliceReducer from './productsSlice';
import usersSliceReducer from './usersSlice';
import uiSliceReducer from './uiSlice';


const store = configureStore({
    reducer: {
        authSlice: authSliceReducer,
        productsSlice: productsSliceReducer,
        usersSlice: usersSliceReducer,
        uiSlice: uiSliceReducer,
    }
});


export default store;