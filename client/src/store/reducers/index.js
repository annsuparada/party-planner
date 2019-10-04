import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from '../actions/index';


export const initialState = {
    isRegistering: false,
    isRegisted: false,
    isLoggingIn: false,
    isLoggedIn: false,
    error: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_START:
            return {
                ...state,
                isRegistering: true,
                error: null
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                isRegistering: false,
                isRegisted: true,
                error: null
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                isRegistering: false,
                error: action.payload
            };
        case LOGIN_START:
            return {
                ...state,
                isLoggingIn: true,
                error: null
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: true,
                error: null,
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoggingIn: false,
                error: action.payload
            }

        default: 
            return state
    }
}