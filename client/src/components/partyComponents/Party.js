import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getParties, getPartyById, deleteParty } from '../../store/actions';
import TodoForm from '../todoComponents/TodoForm';
import ShoppingListForm from '../shoppingListComponents/ShoppingListForm';
import { Row, Col, Button } from 'antd';
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
    const deleteParty = (id) => {
        props.deleteParty(id)
        props.history.push('/parties')
    }

    return (
        <>
            <div className="party-container">
                <button className='back-btn' onClick={goBacktoParties}>Back</button>
                <div className='party-wrapper'>

                    <h2>{props.partyById.party_name}</h2>
                    <Row type="flex" justify="start">
                        <Col span={4}><p>Date: {props.partyById.date}</p></Col>
                        <Col span={4}><p>Guests: {props.partyById.guests}</p></Col>
                        <Col span={4}><p>Theme: {props.partyById.theme}</p></Col>
                        <Col span={4}><p>Budget: ${props.partyById.budget}</p></Col>
                        <Col span={4}>
                            <Button type="danger" onClick={() => deleteParty(partyId)}>Delete Party</Button>
                        </Col>
                    </Row>
                    <div className='list-wrapper'>
                    {/* <Row type="flex" justify="space-around">
                        <Col> */}
                            <ShoppingListForm shoppingListId={shoppingListId} partyId={partyId} />
                        {/* </Col>
                        <Col> */}
                            <TodoForm todoListId={todoListId} partyId={partyId} />
                        {/* </Col>
                    </Row> */}
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