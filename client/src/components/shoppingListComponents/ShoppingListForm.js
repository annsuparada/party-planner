import React, { useState } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addItem } from '../../store/actions';
import { Form, Select, Input, Button } from 'antd';

const ShoppingListForm = (props) => {
    const [state, setSate] = useState({
        item: '',
        price: null
    })

    const handleSubmit = e => {
        e.preventDefault();
        props.addItem(state)
    }

    const handleChange = e => {
        setSate({
            ...state,
            [e.target.name]: e.target.value,
            shopping_list_id: props.shoppingListId
        })
    }

    return (<>
    {console.log(state)}
        <input
            type="text"
            name="item"
            value={state.item}
            onChange={handleChange}
        />
         <input
            type="text"
            name="price"
            value={state.price}
            onChange={handleChange}
        />
        <button onClick={handleSubmit}>add</button>
    </>);
}
 
const mapStateToProps = state => ({
    isLoading: state.shoppingReducer.isLoading,
    item: state.shoppingReducer.item,
    error: state.shoppingReducer.error
})

export default withRouter(
    connect(
        mapStateToProps,
        { addItem }
    )(ShoppingListForm)
)