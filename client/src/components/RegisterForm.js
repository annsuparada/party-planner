import React, { useState } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { register } from "../store/actions/index";
import Loader from 'react-loader-spinner'

const RegisterForm = props => {
    const [newUser, setNewUser] = useState({
        username: "",
        password: ""
    });
    const [userNameErrors, setUserNameErrors] = useState("");
    const [passwordErrors, setPasswordErrors] = useState("");
  
    const defaultUser = {
      username: "",
      password: ""
    };
    const validateForm = () => {
        let valid = true;

        if (newUser.username.length === 0 || userNameErrors.length > 0) {
        valid = false;
        setUserNameErrors("Username must have at least 3 characters");
        }

        if (newUser.password.length === 0 || passwordErrors.length > 0) {
        valid = false;
        setPasswordErrors("Password must have at least 6 characters");
        }

        return valid;
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Valid Form");
      props.register(props.history, newUser);
      resetForm();
    } else {
      console.log("Invalid Form");
    }
  };
  const handleInputChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    
    let userNameError = userNameErrors;
    let passwordError = passwordErrors;

    switch (name) {
      case "username":
        userNameError =
          value.length < 3 ? "Username must have at least 3 characters" : "";
        break;
      case "password":
        passwordError =
          value.length < 6 ? "Password must have at least 6 characters" : "";
        break;
      default:
        break;
    }
    setUserNameErrors(userNameError);
    setPasswordErrors(passwordError);

    setNewUser({ ...newUser, [name]: value });
  };

  const resetForm = () => {
    setNewUser(defaultUser);
  };
    return (
        <>
        <h1>This is RegisterForm</h1>
        <form onSubmit={handleSubmit}>
            <input 
               placeholder="Username"
               type="text"
               name="username"
               value={newUser.username}
               onChange={handleInputChange} 
            />
            {userNameErrors.length > 0 && (
                <p>{userNameErrors}</p>
            )}
            
            <input 
                placeholder="Password"
                type="password"
                name="password"
                value={newUser.password}
                onChange={handleInputChange} 
            />
            <button>
              {props.isLoading ? (
                  <Loader
                      type="TailSpin"
                      color="#00BFFF"
                      height={100}
                      width={100}
              /> ):(
              'Submit'
              )}
            </button>
        </form>
        {props.error && <p>{props.error}</p>}
        {passwordErrors.length > 0 && (
                <p>{passwordErrors}</p>
            )}
        </>
    )
}

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    error: state.error
  });
  export default withRouter(
    connect(
      mapStateToProps,
      { register }
    )(RegisterForm)
  )