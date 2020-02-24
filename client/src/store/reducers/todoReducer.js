import {
    ADD_TODO_START,
    ADD_TODO_SUCCESS,
    ADD_TODO_FAILURE,
    FETCH_TODO_SUCCESS,
} from '../actions/index';


export const initialState = {
    task: [],
    isLoading: false,
    error: [],
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TODO_START:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case ADD_TODO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                task: [action.payload, ...state.task],
                error: null
            }
        case ADD_TODO_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        case FETCH_TODO_SUCCESS:
            return {
                task: [...state.task, action.payload]
            }
        default:
            return state
    }
}