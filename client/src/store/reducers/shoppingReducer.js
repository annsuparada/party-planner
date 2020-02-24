import {
    ADD_ITEM_START,
    ADD_ITEM_SUCCESS,
    ADD_ITEM_FAILURE,
    FETCH_ITEM_SUCCESS,
} from '../actions/index';


export const initialState = {
    item: [],
    isLoading: false,
    error: [],
}

export const shoppingReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_ITEM_START:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case ADD_ITEM_SUCCESS:
            return {
                ...state,
                isLoading: false,
                item: [action.payload, ...state.item],
                error: null
            }
        case ADD_ITEM_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        case FETCH_ITEM_SUCCESS:
            return {
                item: [...state.item, action.payload]
            }
        default:
            return state
    }
}