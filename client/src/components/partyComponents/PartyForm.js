import React, { useState, useReducer } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addParty } from '../../store/actions';
import { Form, Select, Input, Button } from 'antd';

const PartyForm = (props) => {

  const validationForm = () => {
    let valid = true
    if(props.party.party_name.length <= 0){
      valid = false
    } else if (props.party.guests.length <= 0){
      valid = false
    } else if (props.party.theme.length <= 0){
      valid = false
    } else if (props.party.date.length <= 0){
      valid = false
    } else if (props.party.budget === null){
      valid = false
    } 
    return valid
  }

  const handleChange = (e) => {
    props.dispatch({
      type: 'UPDATE_FORM',
      payload: { [e.target.name]: e.target.value }
    })
  }

  const handleSubmit = e => {
    if(validationForm()){
      console.log('validate form')
      props.addParty(props.history, props.party)
    } else {
      console.log('Invalid Form')
    }
}

  return (
    <>
      <div>
        <Form labelCol={{ span: 5 }} wrapperCol={{ span: 18 }} >
          <Form.Item
            label="Party Name"
            name="party_name"
            rules={[
              {
                required: true,
                message: 'Party name is required!',
              },
            ]}
          >
            <Input
              type="text"
              name="party_name"
              value={props.party_name}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item 
          label="Guests" 
          name="guests"
            rules={[
              {
                required: true,
                message: 'Gueste is required!',
              },
            ]}
            >
            <Input
              type="text"
              name="guests"
              value={props.guests}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item 
          label="Theme"
          name="theme"
            rules={[
              {
                required: true,
                message: 'Theme is required!',
              },
            ]}
          >
            <Input
              type="text"
              name="theme"
              value={props.theme}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item 
          label="Date"
          name="date"
            rules={[
              {
                required: true,
                message: 'Date is required!',
              },
            ]}
          >
            <Input
              type="date"
              name="date"
              value={props.date}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item 
          label="Budget"
          name="budget"
            rules={[
              {
                required: true,
                message: 'Budget is required! and input must be interger',
              },
            ]}
          >
            <Input
              type="number"
              name="budget"
              value={props.budget}
              onChange={handleChange}
            />
          </Form.Item>
          <Button 
          type="primary" 
          htmlType="submit" 
          onClick={(e) => handleSubmit(e)}
          style={{ marginLeft: 2 }}
          >
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