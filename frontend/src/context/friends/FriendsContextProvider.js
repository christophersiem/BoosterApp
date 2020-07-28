import React, {useReducer} from "react";
import {UserDispatchContext, UserStateContext} from "../user/UserContext";

export const ADD_FRIEND = 'ADD';
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS';
export const ADD_FRIEND_FAILED = 'ADD_FRIEND_FAILED';


const initialState = {
    addStatus: undefined,
};

function reducer(state, action) {
    switch (action.type) {
        case ADD_FRIEND :
            return { ...state, addStatus: 'PENDING' };
        case ADD_FRIEND_SUCCESS:
            return {
                ...state,
                authStatus: 'SUCCESS',
                userData: action.payload,
            };
        case LOGIN_FAILED:
            return { ...state, authStatus: 'FAILED' };
        case LOGOUT:
            return { ...initialState };
        case REGISTRATION:
            return { ...state, registrationStatus: 'PENDING' };
        case REGISTRATION_SUCCESS:
            return {
                ...state,
                registrationStatus: 'SUCCESS',
                userData: action.payload,
            };
        case REGISTRATION_FAILED:
            return { ...state, registrationStatus: 'FAILED' };
        default:
            return state;
    }
}

function UserContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <UserStateContext.Provider value={state}>
            <UserDispatchContext.Provider value={dispatch}>
                {children}
            </UserDispatchContext.Provider>
        </UserStateContext.Provider>
    );
}

export default UserContextProvider;
