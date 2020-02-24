import React, { useState } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addTodo } from '../../store/actions';
import { Form, Select, Input, Button } from 'antd';

const TodoForm = (props) => {
    const [state, setSate] = useState({
        task: '',
    })

    const handleSubmit = e => {
        e.preventDefault();
        props.addTodo(state)
    }

    const handleChange = e => {
        setSate({
            ...state,
            [e.target.name]: e.target.value,
            todo_lists_id: props.todoListId
        })
    }

    return (<>
        <input
            type="text"
            name="task"
            value={state.task}
            onChange={handleChange}
        />
        <button onClick={handleSubmit}>add</button>
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
        { addTodo }
    )(TodoForm)
)