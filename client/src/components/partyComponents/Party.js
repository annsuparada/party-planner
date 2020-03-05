import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getParties, getPartyById, deleteParty } from '../../store/actions';
import TodoForm from '../todoComponents/TodoForm';
import ShoppingListForm from '../shoppingListComponents/ShoppingListForm';
import { Row, Col, Button, Spin, Popconfirm, message } from 'antd';
import { CaretLeftOutlined } from '@ant-design/icons';
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
        props.history.push(`/parties/user/${props.userId}`)
        message.success(`${props.partyById.party_name} was deleted!`);
    }


    return (
        <>
            <div className="party-card">
                <div className='back-btn' onClick={goBacktoParties}>
                    <p><CaretLeftOutlined />Back</p>
                </div>
                <h2>{props.partyById.party_name}</h2>
                <div className='delail'>
                    <p>Date: {props.partyById.date}</p>
                    <p>Guests: {props.partyById.guests}</p>
                    <p>Theme: {props.partyById.theme}</p>
                    <p>Budget: ${props.partyById.budget}</p>

                    
                        <Popconfirm
                            title="Are you sure delete this party?"
                            onConfirm={confirm}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button>Delete Party</Button>
                        </Popconfirm>
                    
                </div>
            </div>
            <div className="party-container">

                <div className='party-wrapper'>
                    {props.isLoading && <div><Spin size="large" style={{ display: 'flex', justifyContent: 'center' }} />{props.isLoading}</div>}

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
    userId: state.partyReducer.userId,
})

export default withRouter(
    connect(
        mapStateToProps,
        { getParties, getPartyById, deleteParty }
    )(Party)
)