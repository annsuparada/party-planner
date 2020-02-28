import React, { useState } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addItem, deleteItem } from '../../store/actions';
import { Form, Select, Input, Button, Row, Col, Icon } from 'antd';
import './shoppingListForm.scss'
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

    return (
        <div className='list-box'>
            <h2>Shopping List</h2>
            <Row type="flex" justify="space-around">
                <Col span={10}>
                    <Input
                        type="text"
                        name="item"
                        value={state.item}
                        onChange={handleChange}
                        placeholder="Item"
                        size="small"
                    />
                </Col>
                <Col span={10}>
                    <Input
                        type="text"
                        name="price"
                        value={state.price}
                        onChange={handleChange}
                        placeholder="Price"
                        size="small"
                    />
                </Col>
                <Col span={4}>
                    <Button size='small' type="primary" onClick={handleSubmit}>add</Button>
                </Col>
            </Row>

            {/* =====================shopping list======================== */}
            {props.item && props.item.map(item => (
                // <div className='shopping-list'>
                <Row>
                    <Col span={10}><p>{item.item}</p></Col>
                    <Col span={10}><p>{item.price}</p></Col>
                    <Col span={4}>
                        <div onClick={() => props.deleteItem(item.id)}>
                            <Icon type="close-square" style={{fontSize: 25}}/>
                        </div>
                    </Col>
                </Row>
                // </div>
            ))}
            <p>Total $ {props.totalPrice || 0}</p>
        </div>
    );
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