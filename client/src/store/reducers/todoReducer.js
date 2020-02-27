import {
    ADD_TASK_START,
    ADD_TASK_SUCCESS,
    ADD_TASK_FAILURE,
    FETCH_TODO_SUCCESS,

    DELETE_TASK_START,
    DELETE_TASK_SUCCESS,
    DELETE_TASK_FAILURE,
} from '../actions/index';


export const initialState = {
    task: [],
    newTask: [],
    isLoading: false,
    error: [],
    deleteTaskSuccess: '',
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TASK_START:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case ADD_TASK_SUCCESS:
            return {
                ...state,
                isLoading: false,
                // task: action.payload,
                newTask: action.payload,
                error: null,
                // deleteTaskSuccess: state.task.filter(e => e.id !== action.payload),
            }
        case ADD_TASK_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        case FETCH_TODO_SUCCESS:
            return {
                ...state,
                task: action.payload,
                // deleteTaskSuccess: state.task.filter(e => e.id !== action.payload),
            }
        case DELETE_TASK_START:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case DELETE_TASK_SUCCESS:
            return {
                ...state,
                isLoading: false,
                deleteTaskSuccess: state.task.filter(e => e.id !== action.payload),
                error: null
            }
        case DELETE_TASK_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        default:
            return state
    }
}