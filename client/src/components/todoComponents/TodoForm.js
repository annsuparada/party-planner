import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getPartyById, addTask, deleteTask } from '../../store/actions';
// import { Form, Select, Input, Button } from 'antd';

const TodoForm = (props) => {
    const [state, setSate] = useState({
        task: '',
    })

    useEffect(() => {
        props.getPartyById(props.partyId)
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        props.addTask(state)
    }

    const handleChange = e => {
        setSate({
            ...state,
            [e.target.name]: e.target.value,
            todo_lists_id: props.todoListId
        })
    }

    // const taskId = 
    const deleteTask = (taskId) => {
        props.deleteTask(taskId)
    }

    return (<>
        {console.log('=============', props)}
        <h2>To-do List</h2>
        <input
            type="text"
            name="task"
            value={state.task}
            onChange={handleChange}
        />
        <button onClick={handleSubmit}>add</button>
        {/* =====================todo list======================== */}
        {props.task && props.task.map(task => (
            <div>
                {task.task}----<button onClick={() => deleteTask(task.id)}>X</button>
            </div>
        ))}
    </>);
}


const mapStateToProps = state => ({
    isLoading: state.todoReducer.isLoading,
    task: state.todoReducer.task,
    error: state.todoReducer.error
})

export default withRouter(
    connect(
        mapStateToProps,
        { getPartyById, addTask, deleteTask }
    )(TodoForm)
)