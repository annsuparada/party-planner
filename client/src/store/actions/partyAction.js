import axiosWithAuth from '../../utilities/axiosWithAuth';

export const FETCH_PARTY_START = "FETCH_PARTY_START"
export const FETCH_PARTY_SUCCESS = "FETCH_PARTY_SUCCESS"
export const FETCH_PARTY_FAILURE = "FETCH_PARTY_FAILURE"

export const getPartyByCategory = (id) => dispatch => {
    dispatch({ type: FETCH_PARTY_START })
        return axiosWithAuth()
            .get(`https://mypartyplanner.herokuapp.com/api/categories/${id}/party`)
            // .get(`http://localhost:8000/api/categories/${id}/party`)
            .then(response => {
                console.log("party by cat", response)
                dispatch({ 
                    type: FETCH_PARTY_SUCCESS,
                    payload: response.data
                })
                
            })
            .catch(error => {
                console.log("party error", error)
                dispatch({ 
                    type: FETCH_PARTY_FAILURE,
                    payload: "No parties on this categoty ID"
                })
            })   
}



export const ADD_PARTY_START = "ADD_PARTY_START"
export const ADD_PARTY_SUCCESS = "ADD_PARTY_SUCCESS"
export const ADD_PARTY_FAILURE = "ADD_PARTY_FAILURE"

export const addParty = state => dispatch => {
    dispatch({ type: ADD_PARTY_START })
    return axiosWithAuth()
        .post("https://mypartyplanner.herokuapp.com/api/parties", state)
        .then(response => {
            dispatch({
                type: ADD_PARTY_SUCCESS,
                payload: response.data
            })
        })
        .catch(error => {
            dispatch({
            type: ADD_PARTY_FAILURE,
            payload: error
            })
        })
}
