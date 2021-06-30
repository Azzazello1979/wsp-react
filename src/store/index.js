import { createSlice, configureStore } from '@reduxjs/toolkit';

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

// USERS
const usersInitialState = {
    users: [
        { id: 1, name: 'Baligno' },
        { id: 2, name: 'Babino' },
        { id: 3, name: 'Mazdino' },
    ]
};
const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: usersInitialState,
    reducers: {
        addUser(state, action) { // action.payload --> {...}
            state.users.push(action.payload);
        }
    }
});


// PRODUCTS...
const productsInitialState = {
    products: []
};
const productsSlice = createSlice({
    name: 'productsSlice',
    initialState: productsInitialState,
    reducers: {
        createProduct(state, action) {
            state.products.push(action.payload); // action.payload --> {...}
        },
        deleteProduct(state, action) {
            state.products = state.products.filter(p => p.id !== action.payload); // action.payload --> '2577'
        },
        updateProduct(state, action) {
            const toUpdateObj = action.payload.data;
            const theProductObj = state.products.find(p => p.id === action.payload.id); // action.payload --> { id: '123', data: { 'name':'some new name', 'price':'99.99' } }
            const index = state.products.findIndex(p => p.id === action.payload.id);

            for (let productKey in theProductObj) {
                for (let toUpdateObjKey in toUpdateObj) {
                    if (theProductObj[productKey] === toUpdateObj[toUpdateObjKey]) {
                        theProductObj[productKey] = toUpdateObj[toUpdateObjKey]
                    }
                }
            }

            state.products.splice(index, 1, theProductObj); // splice modifies the target inline!

        }
    }
});

const store = configureStore({
    reducer: {
        authSlice: authSlice.reducer,
        productsSlice: productsSlice.reducer,
        usersSlice: usersSlice.reducer,
    }
});

export const authActions = authSlice.actions;
export const productActions = productsSlice.actions;
export default store;