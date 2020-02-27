import axiosWithAuth from '../../utilities/axiosWithAuth';

export const ADD_ITEM_START = "ADD_ITEM_START"
export const ADD_ITEM_SUCCESS = "ADD_ITEM_SUCCESS"
export const ADD_ITEM_FAILURE = "ADD_ITEM_FAILURE"

export const addItem = state => dispatch => {
    dispatch({ type: ADD_ITEM_START })
    return axiosWithAuth()
        // .post("https://myTODOplanner.herokuapp.com/api/parties", state)
        .post("http://localhost:8000/api/parties/shopping-item/new", state)

        .then(response => { console.log(response)
            dispatch({
                type: ADD_ITEM_SUCCESS,
                payload: response.data
            })
        })
        .catch(error => {
            dispatch({
            type: ADD_ITEM_FAILURE,
            payload: error
            })
        })
}


export const DELETE_ITEM_START = "DELETE_ITEM_START"
export const DELETE_ITEM_SUCCESS = "DELETE_ITEM_SUCCESS"
export const DELETE_ITEM_FAILURE = "DELETE_ITEM_FAILURE"

export const deleteItem = id => dispatch => {
    dispatch({ type: DELETE_ITEM_START })
    return axiosWithAuth()
        .delete(`http://localhost:8000/api/parties/shopping-list/${id}`)

        .then(response => { 
            dispatch({
                type: DELETE_ITEM_SUCCESS,
                payload: id
            })
        })
        .catch(error => {
            dispatch({
            type: DELETE_ITEM_FAILURE,
            payload: error
            })
        })
}