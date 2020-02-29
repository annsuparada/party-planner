import React, { useState, useReducer } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addParty } from '../../store/actions';
import { Form, Select, Input, Button } from 'antd';

const PartyForm = (props) => {
  const handleChange = (e) => {
    props.dispatch({
      type: 'UPDATE_FORM',
      payload: { [e.target.name]: e.target.value }
    })
  }
  const validateMessages = {
    required: "'${name}' is required!",
    // ...
  };
  const formRef = React.createRef();

  return (
    <>
      <div>
        <Form labelCol={{ span: 5 }} wrapperCol={{ span: 18 }} name="control-ref" ref={formRef} >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Party Name"
            rules={[{ required: true }]}
          >
            <Input
              type="text"
              name="party_name"
              value={props.party_name}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item label="Guests">
            <Input
              type="text"
              name="guests"
              value={props.guests}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item label="Theme">
            <Input
              type="text"
              name="theme"
              value={props.theme}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item label="Date">
            <Input
              type="date"
              name="date"
              value={props.date}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item label="Budget">
            <Input
              type="number"
              name="budget"
              value={props.budget}
              onChange={handleChange}
            />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  isLoading: state.partyReducer.isLoading,
  parties: state.partyReducer.parties,
  error: state.partyReducer.error,
})

export default withRouter(
  connect(
    mapStateToProps,
    { addParty }
  )(PartyForm)
)