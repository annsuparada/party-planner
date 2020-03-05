import axiosWithAuth from '../../utilities/axiosWithAuth';

export const ADD_TASK_START = "ADD_TASK_START"
export const ADD_TASK_SUCCESS = "ADD_TASK_SUCCESS"
export const ADD_TASK_FAILURE = "ADD_TASK_FAILURE"

export const addTask = state => dispatch => {
    dispatch({ type: ADD_TASK_START })
    return axiosWithAuth()
        .post("https://mypartyplanner.herokuapp.com/api/parties/todo-task/new", state)
        .then(response => { console.log('add todo',response)
            dispatch({
                type: ADD_TASK_SUCCESS,
                payload: response.data
            })
        })
        .catch(error => {
            dispatch({
            type: ADD_TASK_FAILURE,
            payload: error
            })
        })
}


export const DELETE_TASK_START = "DELETE_TASK_START"
export const DELETE_TASK_SUCCESS = "DELETE_TASK_SUCCESS"
export const DELETE_TASK_FAILURE = "DELETE_TASK_FAILURE"

export const deleteTask = id => dispatch => {
    dispatch({ type: DELETE_TASK_START })
    return axiosWithAuth()
        .delete(`https://mypartyplanner.herokuapp.com/api/parties/task/${id}`)

        .then(response => { 
            dispatch({
                type: DELETE_TASK_SUCCESS,
                payload: id
            })
        })
        .catch(error => {
            dispatch({
            type: DELETE_TASK_FAILURE,
            payload: error
            })
        })
}


export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED"

export const toggleCompleted = (id, state) => dispatch => {
    return axiosWithAuth()
        .put(`https://mypartyplanner.herokuapp.com/api/parties/task/${id}`, state)
        .then(response => { 
            dispatch({
                type: TOGGLE_COMPLETED,
                payload: id
            })
        })
}