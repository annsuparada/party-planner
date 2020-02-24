import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getParties, getPartyById } from '../../store/actions';
// import PartyForm from './PartiesForm';

const Party = props => {
    console.log('props', props)
    const partyId = props.match.params.id
    useEffect(() => {
        props.getPartyById(partyId)
    }, [])

    const goBacktoParties = () => {
        props.history.goBack()
    }

    const getShoppingList = props.partyById.shopping_list
    const getTodoList = props.partyById.todo_list

    return (
        <>
            {console.log('shoppinglist', getShoppingList)}
            <button onClick={goBacktoParties}>Back</button>
            <h1>Party</h1>
            <p>{props.partyById.party_name} Party</p>
            <p>Date: {props.partyById.date}</p>
            <p>Guests: {props.partyById.guests}</p>
            <p>Theme: {props.partyById.theme}</p>
            <p>Budget: ${props.partyById.budget}</p>

            <h2>Shopping List</h2>
            {getShoppingList && getShoppingList.map(item => (
                <div>
                    {item.item}
                </div>
            ))}

            <h2>To-do List</h2>
            {getTodoList && getTodoList.map(task => (
                <div>
                    {task.task}
                </div>
            ))}
        </>
    )
}

const mapStateToProps = state => ({
    isLoading: state.partyReducer.isLoading,
    partyById: state.partyReducer.partyById,
    error: state.partyReducer.error
})

export default withRouter(
    connect(
        mapStateToProps,
        { getParties, getPartyById }
    )(Party)
)