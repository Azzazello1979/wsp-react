import { createStore } from 'redux';

const initState = {
    userLoggedIn: false
};

const authReducer = (state = initState, action) => {
    console.log('authReducer was called...');
    if (action.type === 'LOGIN') {
        return { userLoggedIn: true };

    } else if (action.type === 'LOGOUT') {
        return { userLoggedIn: false };

    } else {
        return state;
    }
};

const store = createStore(authReducer);

export default store;