import { Reducer } from 'react';
import { EBOOLEAN } from "../utils/enums";
import { TAuthState, TAuthAction } from "../types";


const authReducer: Reducer<TAuthState, TAuthAction> = (state, action) => {
    switch(action.type){
        case 'LOGIN':
            const { username } = action;
            const user = {
                email: username,
            };
            localStorage.setItem('loggedIn', `${EBOOLEAN.TRUE}`);
            localStorage.setItem('user', JSON.stringify(user));
            return {...state, isLoggedIn: EBOOLEAN.TRUE, user };
        case 'LOGOUT': 
            localStorage.removeItem('loggedIn');
            localStorage.removeItem('user');
            return {...state, isLoggedIn: EBOOLEAN.FALSE, user: {} };
        default:
            return state;
    }
};

export default authReducer;