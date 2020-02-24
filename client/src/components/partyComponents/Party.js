import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getParties, getPartyById, addTodo } from '../../store/actions';
import TodoForm from '../todoComponents/TodoForm';

const Party = props => {
    const partyId = props.match.params.id
    const todoListId = props.partyById.todo_lists_id

    useEffect(() => {
        props.getPartyById(partyId)
        // props.addTodo()
    }, [])

    const goBacktoParties = () => {
        props.history.goBack()
    }

    const getShoppingList = props.partyById.shopping_list
    const getTodoList = props.partyById.todo_list

    return (
        <>
            {console.log('tasks', props.task)}
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
            <TodoForm todoListId={todoListId} task={props.task}/>
            {props.task && props.task.map(task => (
                <div>
                    {task.task}
                </div>
            ))}
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
    error: state.partyReducer.error,
    task: state.todoReducer.task

})

export default withRouter(
    connect(
        mapStateToProps,
        { getParties, getPartyById, addTodo}
    )(Party)
)