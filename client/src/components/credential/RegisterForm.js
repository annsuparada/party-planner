import React, { useState } from 'react';
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { register } from "../../store/actions/index";
import { Spin, Form, Input, Button, Alert } from 'antd';
import './form.scss'
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
    if (validateUserName(event) && validatePassword(event)) {
      props.register(props.history, { username: newUsername.username, password: newPassword.password });
    } else {
      console.log("Invalid Form");
    }
  };


  const handleInputChange = e => {
    setNewUsername({ ...validateUserName(e.target.value), "username": e.target.value });
    setNewPassword({ ...validatePassword(e.target.value), "password": e.target.value })
  };
  const handleInputPassword = e => {
    setNewPassword({ ...validatePassword(e.target.value), "password": e.target.value })
  };
  const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 15 },
  };
  const tailLayout = {
    wrapperCol: { offset: 5, span: 4 },
  };

  return (
    <>
    <Spin tip="Loading" spinning={props.isLoading}>
      <Form {...layout} className="form">

        <h3>Register Form</h3>

        <Form.Item
          label="Username"
          name="username"
          validateStatus={newUsername.validateStatus}
          help={newUsername.errorMsg}
        >
          <Input
            placeholder="Username"
            type="text"
            name="username"
            value={newUsername.username}
            onChange={handleInputChange}
          />
          {props.error && <Alert message={props.error} type="error" closable="true"/>}
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          validateStatus={newPassword.validateStatus}
          help={newPassword.errorMsg}
        >
          <Input
            placeholder="Password"
            type="password"
            name="password"
            value={newPassword.password}
            onChange={handleInputPassword}
          />
        </Form.Item>

        <Form.Item {...tailLayout}>
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

    </>
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