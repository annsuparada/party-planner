import axiosWithAuth from '../../utilities/axiosWithAuth';

export const FETCH_PARTY_START = "FETCH_PARTY_START"
export const FETCH_PARTY_SUCCESS = "FETCH_PARTY_SUCCESS"
export const FETCH_PARTY_FAILURE = "FETCH_PARTY_FAILURE"

export const getPartyByCategory = (id) => dispatch => {
    dispatch({ type: FETCH_PARTY_START })
        return axiosWithAuth()
            .get(`http://localhost:8000/api/categories/${id}/party`)
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

export const getPartiesByCategoryId = (categoryId) => {
    return axiosWithAuth()
        .get(`http://localhost:8000/api/categories/${categoryId}/party`)
        .then(response => {
            return response.body
        })
        .catch(error => error);
} 


