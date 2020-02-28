import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getParties, getPartyById, deleteParty} from '../../store/actions';
import TodoForm from '../todoComponents/TodoForm';
import ShoppingListForm from '../shoppingListComponents/ShoppingListForm';

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
            <button onClick={goBacktoParties}>Back</button>
            <h1>Party</h1>
            <p>{props.partyById.party_name} Party</p>
            <p>Date: {props.partyById.date}</p>
            <p>Guests: {props.partyById.guests}</p>
            <p>Theme: {props.partyById.theme}</p>
            <p>Budget: ${props.partyById.budget}</p>
            <button onClick={() => deleteParty(partyId)}>Delete</button>
  
            {/* ---------------------------shopping list------------------------------ */}
            <br/>
            <ShoppingListForm shoppingListId={shoppingListId} partyId={partyId} />

            {/* ---------------------------todo list------------------------------ */}
            <TodoForm todoListId={todoListId} partyId={partyId}/>
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
        { getParties, getPartyById, deleteParty}
    )(Party)
)