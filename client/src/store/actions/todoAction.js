import axiosWithAuth from '../../utilities/axiosWithAuth';

export const ADD_TODO_START = "ADD_TODO_START"
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS"
export const ADD_TODO_FAILURE = "ADD_TODO_FAILURE"

export const addTodo = state => dispatch => {
    dispatch({ type: ADD_TODO_START })
    return axiosWithAuth()
        // .post("https://myTODOplanner.herokuapp.com/api/parties", state)
        .post("http://localhost:8000/api/parties/todo-task/new", state)

        .then(response => { console.log(response)
            dispatch({
                type: ADD_TODO_SUCCESS,
                payload: response.data
            })
        })
        .catch(error => {
            dispatch({
            type: ADD_TODO_FAILURE,
            payload: error
            })
        })
}