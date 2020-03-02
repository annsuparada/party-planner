import React, { useState } from 'react';
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { login } from "../store/actions/index";
import { Spin, Form, Input, Button, Alert } from 'antd';
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
                    <h3>Login</h3>
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
                        <Input
                            placeholder="Password"
                            type="password"
                            name="password"
                            value={input.password}
                            onChange={inputHandler}
                        />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit" onClick={() => submitHandler()}>
                            Submit
                    </Button >
                    </Form.Item>
                    <p>Don't have an account? <Link to='/register'>Sign Up</Link></p>
                </Form>
            </Spin>
        </>
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