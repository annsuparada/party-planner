import {
    FETCH_CATEGORIES_START,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE,
} from '../actions/index';


export const initialState = {
    categories: [],
    isLoading: false,
    error: [],
}

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
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

        default: 
        return state
    }
}