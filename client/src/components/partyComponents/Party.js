import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getParties, getPartyById} from '../../store/actions';
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
    
    const getShoppingList = props.partyById.shopping_list
    const getTodoList = props.partyById.todo_list



    return (
        <>
            {/* {console.log('props.totalPrice', props.totalPrice)} */}
            <button onClick={goBacktoParties}>Back</button>
            <h1>Party</h1>
            <p>{props.partyById.party_name} Party</p>
            <p>Date: {props.partyById.date}</p>
            <p>Guests: {props.partyById.guests}</p>
            <p>Theme: {props.partyById.theme}</p>
            <p>Budget: ${props.partyById.budget}</p>


            {/* ---------------------------shopping list------------------------------ */}
            <h2>Shopping List</h2>
            <ShoppingListForm shoppingListId={shoppingListId} />
            {props.item && props.item.map(item => (
                <div>
                    {item.item} {item.price}
                </div>
            ))}
            {getShoppingList && getShoppingList.map(item => (
                <div>
                    {item.item} {item.price}
                </div>
            ))}
                 <p>Total $ {props.totalPrice}</p>
             {props.totalPrice && props.item.map(item => ( console.log('item.price', item.price)
                // <div> {item.price + props.totalPrice}</div>
            ))} 

            {/* ---------------------------todo list------------------------------ */}
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
    task: state.todoReducer.task,
    item: state.shoppingReducer.item,
    totalPrice: state.shoppingReducer.totalPrice,
})

export default withRouter(
    connect(
        mapStateToProps,
        { getParties, getPartyById}
    )(Party)
)