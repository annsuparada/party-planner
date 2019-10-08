import axios from 'axios';
import axiosWithAuth from '../../utilities/axiosWithAuth'

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const register = (history, credentials) => dispatch => {
    dispatch({ type: REGISTER_START });
    return axios 
        .post("https://mypartyplanner.herokuapp.com/api/auth/register", credentials)
        .then(response => {
            console.log('register success', response)
            if(response)
            dispatch({ type: REGISTER_SUCCESS });
            history.push("/login");
        })
        .catch(error => {
            console.log("register error", error)
            dispatch({ 
                type: REGISTER_FAILURE,
                payload: 'This username is already taken.'
            });
        });
};

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = (history, credentials) => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
        .post("https://mypartyplanner.herokuapp.com/api/auth/login", credentials)
        .then(response => {
            console.log("login ssuccess", response)
            dispatch({ type: LOGIN_SUCCESS })
            localStorage.setItem("token", response.data.token)
            history.push("/categories")
        })
        .catch(error => {
            console.log("login error", error)
            dispatch({
                type: LOGIN_FAILURE,
                payload: "Plese provide correct username and password"
            })
        })

}


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

export const FETCH_PARTY_START = "FETCH_PARTY_START"
export const FETCH_PARTY_SUCCESS = "FETCH_PARTY_SUCCESS"
export const FETCH_PARTY_FAILURE = "FETCH_PARTY_FAILURE"

export const getPartyByCategory = (history) => dispatch => {
    dispatch({ type: FETCH_CATEGORIES_START })
        return axiosWithAuth()
            .get("https://mypartyplanner.herokuapp.com/api/parties")
            .then(response => {
                console.log("party by cat", response)
                // let newPartyList =  response.data.filter(item => {
                //     if (item.category_id == ?) {
                //         return item;
                //     }
                // })
                dispatch({ 
                    type: FETCH_PARTY_SUCCESS,
                    payload: response.data
                })
                // history.push("/parties")
            })
            .catch(error => {
                console.log("party error", error)
                dispatch({ 
                    type: FETCH_PARTY_FAILURE,
                    payload: "error"
                })
            })
}
