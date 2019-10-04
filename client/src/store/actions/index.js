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

}
