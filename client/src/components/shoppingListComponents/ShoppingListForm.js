import React, { useState } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addItem, deleteItem } from '../../store/actions';
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

    const deleteItem = (itemId) => {
        props.deleteItem(itemId)
    }

    return (<>
     {console.log('=============', props)}
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

        {/* =====================shopping list======================== */}
        <h2>Shopping List</h2>
        {props.item && props.item.map(item => (
                <div>
                    {item.item} {item.price}---<button onClick={() => props.deleteItem(item.id)}>X</button>
                </div>
            ))}
        <p>Total $ {props.totalPrice}</p>
    </>);
}
 
const mapStateToProps = state => ({
    isLoading: state.shoppingReducer.isLoading,
    item: state.shoppingReducer.item,
    totalPrice: state.shoppingReducer.totalPrice,
    error: state.shoppingReducer.error
})

export default withRouter(
    connect(
        mapStateToProps,
        { addItem, deleteItem }
    )(ShoppingListForm)
)