import React, { useState, useForm} from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addItem, deleteItem, togglePurchased } from '../../store/actions';
import { Form, Input, Button, Row, Col, Popconfirm, message, Checkbox } from 'antd';
import './shoppingListForm.scss';

import { CloseSquareOutlined } from '@ant-design/icons';

const ShoppingListForm = (props) => {
    const [state, setSate] = useState({
        item: '',
        price: null
    })
    const [form] = Form.useForm()
    const validateForm = () => {
        let valid = true
        if (state.item.length === 0) {
            valid = false
        } else if (state.price === null) {
            valid = false
        }
        return valid
    }
    const defaultForm = {item: '', price: null}
    const resetForm = () => {
        form.resetFields();
    }
    const handleSubmit = e => {
        if (validateForm()) {
            props.addItem(state)
            // form.resetFields();
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
        props.togglePurchased(itemId, { purchased: purchased })
    }
    return (
        <div className='list-box'>
            <h3>SHOPPING LIST</h3>
            <Form form={form}>
                <div className="form">
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
                        <Form.Item>
                            <Button type="primary" htmlType="submit" onClick={handleSubmit}>add</Button>
                        </Form.Item>
                </div>
            </Form>
            {/* =====================shopping list======================== */}
            {props.items && props.items.map(item => (

                <Row justify="space-between" key={item.id}>
                    <Col span={13}>
                        <Checkbox checked={item.purchased}
                            className={item.purchased ? "purchased" : "notPurchased"}
                            onClick={() => togglePurchased(item.id, !item.purchased)}
                        >
                            {item.item}
                        </Checkbox>
                    </Col>
                    <Col span={5}><p>$ {item.price}</p></Col>
                    <Col span={1}>
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
            <Row justify="space-between">
                <Col span={12}><h6>Purchased  </h6></Col>
                <Col span={9}><h6> $ {sumPurchased(props.items)}</h6></Col>
            </Row>
            {/* <h6>Purchased $ {sumPurchased(props.items)}</h6> */}
            <Row justify="space-between">
                <Col span={12}><h4>Total </h4></Col>
                <Col span={9}><h4>$  {sumTotal(props.items)}</h4></Col>
            </Row>


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