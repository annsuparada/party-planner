import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getParties, getPartyById, deleteParty } from '../../store/actions';
import TodoForm from '../todoComponents/TodoForm';
import ShoppingListForm from '../shoppingListComponents/ShoppingListForm';
import { Row, Col, Button, Spin, Popconfirm, message } from 'antd';
import './party.scss'


const Party = props => {
    const partyId = props.match.params.id
    const todoListId = props.partyById.todo_lists_id
    const shoppingListId = props.partyById.shopping_lists_id

    useEffect(() => {
        props.getPartyById(partyId)
    }, [])

    const goBacktoParties = () => {
        props.history.goBack()
    }


    const confirm = (e) => {
        props.deleteParty(partyId)
        props.history.push('/parties')
        message.success(`${props.partyById.party_name} was deleted!`);
    }


    return (
        <>
            <div className="party-container">
                <button className='back-btn' onClick={goBacktoParties}>Back</button>
                <div className='party-wrapper'>
                    {props.isLoading && <div><Spin size="large" style={{ display: 'flex', justifyContent: 'center' }} />{props.isLoading}</div>}
                    <h2>{props.partyById.party_name}</h2>
                    <Row type="flex" justify="start">
                        <Col span={4}><p>Date: {props.partyById.date}</p></Col>
                        <Col span={4}><p>Guests: {props.partyById.guests}</p></Col>
                        <Col span={4}><p>Theme: {props.partyById.theme}</p></Col>
                        <Col span={4}><p>Budget: ${props.partyById.budget}</p></Col>

                        <Col span={4}>
                            <Popconfirm
                                title="Are you sure delete this party?"
                                onConfirm={confirm}
                                okText="Yes"
                                cancelText="No"
                            >
                                <Button type="danger" >Delete Party</Button>
                            </Popconfirm>
                        </Col>
                    </Row>
                    <div className='list-wrapper'>
                        <ShoppingListForm shoppingListId={shoppingListId} partyId={partyId} />
                        <TodoForm todoListId={todoListId} partyId={partyId} />
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    isLoading: state.partyReducer.isLoading,
    partyById: state.partyReducer.partyById,
    error: state.partyReducer.error,
    deleteSuccess: state.partyReducer.deleteSuccess,
    item: state.shoppingReducer.item,
    totalPrice: state.shoppingReducer.totalPrice,
})

export default withRouter(
    connect(
        mapStateToProps,
        { getParties, getPartyById, deleteParty }
    )(Party)
)