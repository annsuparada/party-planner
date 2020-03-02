import React, { useState } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addItem, deleteItem } from '../../store/actions';
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
        if (validateForm()){
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

    return (
        <div className='list-box'>
            {/* {console.log('item', props.item)} */}
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
            {props.item && props.item.map(item => ( 
                <Row key={item.id}>
                    <Col span={9}><p>{item.item}</p></Col>
                    <Col span={1}><div></div></Col>
                    <Col span={9}><p>{item.price}</p></Col>
                    <Col span={1}><div></div></Col>
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