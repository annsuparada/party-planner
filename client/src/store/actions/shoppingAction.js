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