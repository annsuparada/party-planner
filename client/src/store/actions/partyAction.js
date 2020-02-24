import axiosWithAuth from '../../utilities/axiosWithAuth';

export const FETCH_PARTY_START = "FETCH_PARTY_START"
export const FETCH_PARTY_SUCCESS = "FETCH_PARTY_SUCCESS"
export const FETCH_PARTY_FAILURE = "FETCH_PARTY_FAILURE"

export const getParties = (id) => dispatch => {
    dispatch({ type: FETCH_PARTY_START })
        return axiosWithAuth()
            // .get(`https://mypartyplanner.herokuapp.com/api/categories/${id}/party`)
            .get(`http://localhost:8000/api/parties`)
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
        // .post("https://mypartyplanner.herokuapp.com/api/parties", state)
        .post("http://localhost:8000/api/parties", state)

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

export const FETCH_PARTYBYID_START = "FETCH_PARTYBYID_START"
export const FETCH_PARTYBYID_SUCCESS = "FETCH_PARTYBYID_SUCCESS"
export const FETCH_PARTYBYID_FAILURE = "FETCH_PARTYBYID_FAILURE"

export const getPartyById = (id) => dispatch => {
    console.log('action id', id)
    dispatch({ type: FETCH_PARTYBYID_START })
        return axiosWithAuth()
            // .get(`https://mypartyplanner.herokuapp.com/api/parties/${id} `)
            .get(`http://localhost:8000/api/parties/${id} `)
            .then(response => {
                console.log("party by id", response)
                dispatch({ 
                    type: FETCH_PARTYBYID_SUCCESS,
                    payload: response.data
                })
                
            })
            .catch(error => {
                console.log("party error", error)
                dispatch({ 
                    type: FETCH_PARTYBYID_FAILURE,
                    payload: "No parties on this categoty ID"
                })
            })   
}