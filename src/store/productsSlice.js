import { createSlice } from '@reduxjs/toolkit';

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

        },
        setAllProducts(state, action) {
            state.products = action.payload;
        },
    }
});

export const productActions = productsSlice.actions;
export default productsSlice.reducer;