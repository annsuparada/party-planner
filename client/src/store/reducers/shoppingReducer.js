import {
    ADD_ITEM_START,
    ADD_ITEM_SUCCESS,
    ADD_ITEM_FAILURE,
    FETCH_ITEM_SUCCESS,
    SUM_PRICE,
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
                item: [...state.item, action.payload],
            }
        case SUM_PRICE:
            return {
                ...state,
                totalPrice: action.payload, 
            }
        default:
            return state
    }
}