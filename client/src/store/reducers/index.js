import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    FETCH_CATEGORIES_START,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE,
    FETCH_PARTY_START,
    FETCH_PARTY_SUCCESS,
    FETCH_PARTY_FAILURE,

} from '../actions/index';


export const initialState = {
    isLoading: false,
    isRegisted: false,
    isLoggedIn: false,
    error: [],
    categories: [],
    isFetching: false,
    parties: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_START:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isRegisted: true,
                error: null
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case LOGIN_START:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
                error: null,
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoggingIn: false,
                error: action.payload
            }
        case FETCH_CATEGORIES_START:
            return {
                ...state,
                isFetching: true,
                error: null
            }
        case FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                categories: action.payload,
                error: null
            }
        case FETCH_CATEGORIES_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case FETCH_PARTY_START:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case FETCH_PARTY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                parties: action.payload,
                error: null
            }
        case FETCH_PARTY_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default: 
            return state
    }
}