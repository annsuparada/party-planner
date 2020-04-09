import React, { useState } from 'react';
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { register } from "../../store/actions/index";
import { Spin, Form, Input, Button, Alert, Row, Col } from 'antd';
import './form.scss'
import logo from '../../styles/img/logo-party-planner.png';

const RegisterForm = props => {

  const [newUsername, setNewUsername] = useState({ username: "" });
  const [newPassword, setNewPassword] = useState({ password: "" })

  const validateUserName = (username) => {

    if (username.length >= 3) {
      return {
        validateStatus: 'success',
        errorMsg: null,

      };
    }
    return {
      validateStatus: 'error',
      errorMsg: 'Username must have at least 3 characters',
    };
  }
  const validatePassword = (password) => {
    if (password.length >= 6) {
      return {
        validateStatus: 'success',
        errorMsg: null,

      };
    }
    return {
      validateStatus: 'error',
      errorMsg: 'Password must have at least 6 characters',
    };
  }



  const handleSubmit = event => {
    if (newUsername.username.length >= 3 && newPassword.password.length >= 6) {
      props.register(props.history, { username: newUsername.username, password: newPassword.password });
    } else {
      console.log("Invalid Form");
    }
  };


  const handleInputChange = e => {
    setNewUsername({ ...validateUserName(e.target.value), "username": e.target.value });
  };
  const handleInputPassword = e => {
    setNewPassword({ ...validatePassword(e.target.value), "password": e.target.value })
  };


  return (

    <div className="form-container">
      <Link to="/">
        <img src={logo} alt="logo party planner" />
      </Link>
ß
      <Spin tip="Loading" spinning={props.isLoading}>
        <Form layout='vertical' className="form">
          <h3>SIGN UP</h3>
          <Form.Item
            label="Username"
            name="username"
            validateStatus={newUsername.validateStatus}
            help={newUsername.errorMsg}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              placeholder="Username"
              type="text"
              name="username"
              value={newUsername.username}
              onChange={handleInputChange}
            />
            {props.error && <Alert message={props.error} type="error" closable="true" />}
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            validateStatus={newPassword.validateStatus}
            help={newPassword.errorMsg}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.Password
              placeholder="Password"
              type="password"
              name="password"
              value={newPassword.password}
              onChange={handleInputPassword}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              onClick={handleSubmit}
              className="submit-btn"
            >
              Submit
          </Button>
          </Form.Item>
          <p>Already had an account? <Link to='/login'>Login</Link></p>

        </Form>
      </Spin>
    </div>
  )
}

const mapStateToProps = state => ({
  isLoading: state.credentialReducer.isLoading,
  error: state.credentialReducer.error
});
export default withRouter(
  connect(
    mapStateToProps,
    { register }
  )(RegisterForm)
)