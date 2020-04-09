import React, { useState } from 'react';
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { login } from "../../store/actions/index";
import { Spin, Form, Input, Button, Alert, Row, Col } from 'antd';
import logo from '../../styles/img/logo-party-planner.png';

const LoginForm = props => {
    const [input, setInput] = useState({
        username: "",
        password: ""
    })
    const validateForm = () => {
        let valid = true
        if (input.username.length === 0) {
            valid = false
        } else if (input.password.length === 0) {
            valid = false
        }
        return valid
    }

    const inputHandler = e => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const submitHandler = e => {
        if (validateForm()) {
            props.login(props.history, input);
        } else {
            console.log('Invalid form')
        }
    }

    return (
        <div className="form-container">
            <Link to="/">
                <img src={logo} alt="logo party planner" />
            </Link>

            <Spin tip="Loading" spinning={props.isLoading}>
                <Form layout='vertical' className="form">
                    <h3>LOGIN</h3>
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Username is required!',
                            },
                        ]}
                    >
                        <Input
                            placeholder="Username"
                            type="text"
                            name="username"
                            value={input.username}
                            onChange={inputHandler}
                        />
                        {props.error && <Alert message={props.error} type="error" closable="true" />}
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Password is required!',
                            },
                        ]}
                    >
                        <Input.Password
                            placeholder="Password"
                            type="password"
                            name="password"
                            value={input.password}
                            onChange={inputHandler}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" onClick={() => submitHandler()}>
                            Submit
                    </Button >
                    </Form.Item>
                    <p>Don't have an account? <Link to='/register'>Sign Up</Link></p>
                </Form>
            </Spin>

        </div>
    )
}

const mapStateToProps = state => ({
    isLoading: state.credentialReducer.isLoading,
    isLoggedIn: state.credentialReducer.isLoggedIn,
    error: state.credentialReducer.error
})

export default withRouter(
    connect(
        mapStateToProps,
        { login }
    )(LoginForm)
)