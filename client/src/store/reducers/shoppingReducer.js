import {
    ADD_ITEM_START,
    ADD_ITEM_SUCCESS,
    ADD_ITEM_FAILURE,
    FETCH_ITEM_SUCCESS,
    SUM_PRICE,
    DELETE_ITEM_START,
    DELETE_ITEM_SUCCESS,
    DELETE_ITEM_FAILURE,
} from '../actions/index';


export const initialState = {
    item: [],
    isLoading: false,
    error: [],
    totalPrice: null,
}
function sum(total, num) {
    return total + num;
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
                totalPrice: sum(state.totalPrice, action.payload.price),
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
                ...state,
                item: action.payload,
            }
        case SUM_PRICE:
            return {
                ...state,
                totalPrice: action.payload,
            }
        case DELETE_ITEM_START:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case DELETE_ITEM_SUCCESS:
            return {
                ...state,
                isLoading: false,
                item: state.item.filter(e => e.id !== action.payload),
                error: null
            }
        case DELETE_ITEM_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        default:
            return state
    }
}