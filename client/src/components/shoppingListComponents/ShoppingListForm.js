import React, { useState } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addItem, deleteItem, togglePurchased } from '../../store/actions';
import { Form, Input, Button, Row, Col, Popconfirm, message } from 'antd';
import './shoppingListForm.scss';

import { CloseSquareOutlined } from '@ant-design/icons';

const ShoppingListForm = (props) => {
    const [state, setSate] = useState({
        item: '',
        price: null
    })
    const validateForm = () => {
        let valid = true
        if (state.item.length === 0) {
            valid = false
        } else if (state.price === null) {
            valid = false
        }
        return valid
    }
    const handleSubmit = e => {
        if (validateForm()) {
            props.addItem(state)
        } else {
            console.log('Invalid form')
        }
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
        message.success(`Item was deleted!`);
    }

    const togglePurchased = (itemId, purchased) => {
        console.log('purchased', purchased)
        props.togglePurchased(itemId, { purchased: purchased })
    }
    const price = props.itemDeleted
    return (
        <div className='list-box'>
            <h2>Shopping List</h2>
            <Form>
                <Row type="flex" justify="space-around">
                    <Col span={10}>
                        <Form.Item
                            name="item"
                            rules={[
                                {
                                    required: true,
                                    message: 'Item is required!',
                                },
                            ]}
                        >
                            <Input
                                type="text"
                                name="item"
                                value={state.item}
                                onChange={handleChange}
                                placeholder="Item"
                            />
                        </Form.Item>
                    </Col>
                    <Col span={10}>
                        <Form.Item
                            name="price"
                            rules={[
                                {
                                    required: true,
                                    message: 'Price must be interger',
                                },
                            ]}
                        >
                            <Input
                                type="number"
                                name="price"
                                value={state.price}
                                onChange={handleChange}
                                placeholder="Price"
                            />
                        </Form.Item>
                    </Col>
                    <Col span={4}>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" onClick={handleSubmit}>add</Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
            {/* =====================shopping list======================== */}
            {props.items && props.items.map(item => (

                <Row key={item.id}>
                    {/* <div
                        key={item.id}
                        className={item.purchased ? "purchased" : "notPurchased"}
                        onClick={() => togglePurchased(item.id, !item.purchased)}
                    > */}
                        <Col span={9}>
                            <p
                            className={item.purchased ? "purchased" : "notPurchased"}
                            onClick={() => togglePurchased(item.id, !item.purchased)}
                            >
                                {item.item}
                            </p>
                        </Col>
                        <Col span={1}><div></div></Col>
                        <Col span={9}><p>{item.price}</p></Col>
                        <Col span={1}><div></div></Col>
                    {/* </div> */}
                    <Col span={4}>
                        <Popconfirm
                            title="Are you sure delete this item?"
                            onConfirm={() => deleteItem(item.id)}
                            okText="Yes"
                            cancelText="No"
                        >
                            <CloseSquareOutlined />
                        </Popconfirm>
                    </Col>
                </Row>

            ))}
            <p>Purchased $ {sumPurchased(props.items)}</p>
            <p>Total $ {sumTotal(props.items)}</p>
            
        </div>
    );
}

const sumTotal = (items) => {
    return items.reduce((acc, curr) => {
        return acc + curr.price;
    }, 0);
};

const sumPurchased = (items) => {
    return items.filter(item => item.purchased).reduce((acc, curr) => {
        return acc + curr.price;
    }, 0);
};

const mapStateToProps = state => ({
    isLoading: state.shoppingReducer.isLoading,
    items: state.shoppingReducer.items,
    totalPrice: state.shoppingReducer.totalPrice,
    error: state.shoppingReducer.error,
})

export default withRouter(
    connect(
        mapStateToProps,
        { addItem, deleteItem, togglePurchased }
    )(ShoppingListForm)
)