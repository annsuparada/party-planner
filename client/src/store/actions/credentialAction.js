import axios from 'axios';

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
            console.log("login success", response)
            dispatch({ type: LOGIN_SUCCESS })
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("user_id", response.data.user_id)
            console.log(response.data.user_id)
            history.push(`/parties/user/${response.data.user_id}`)
        })
        .catch(error => {
            console.log("login error", error)
            dispatch({
                type: LOGIN_FAILURE,
                payload: "Plese provide correct username and password"
            })
        })

}

export const LOGOUT = "LOGOUT";

export const logout = () => dispatch => {
    dispatch({
      type: LOGOUT
    });
  };

