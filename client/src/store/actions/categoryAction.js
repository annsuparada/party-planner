import axiosWithAuth from '../../utilities/axiosWithAuth';

export const FETCH_CATEGORIES_START = "FETCH_CATEGORIES_START"
export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS"
export const FETCH_CATEGORIES_FAILURE = "FETCH_CATEGORIES_FAILURE"

export const getCategories = () => dispatch => {
    dispatch({ type: FETCH_CATEGORIES_START })
     return axiosWithAuth()
        .get("https://mypartyplanner.herokuapp.com/api/categories")
        .then(response => {
            // console.log('getCat', response)
            dispatch({ 
                type: FETCH_CATEGORIES_SUCCESS,
                payload: response.data
            })
        })
        .catch(error => {
            console.log("catError", error)
            dispatch({
                type: FETCH_CATEGORIES_FAILURE,
                payload: "API is down"
            })
        })

}
