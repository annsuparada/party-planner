import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getPartyById, addTask, deleteTask, toggleCompleted } from '../../store/actions';
import { Form, Select, Input, Button, Row, Col, Popconfirm, message, Checkbox } from 'antd';
import { CloseSquareOutlined } from '@ant-design/icons';
import './todoForm.scss'

const TodoForm = (props) => {
    const [state, setSate] = useState({ task: '' })

    useEffect(() => {
        props.getPartyById(props.partyId)
    }, [])

    const validateForm = () => {
        let valid = true
        if (state.task.length === 0) {
            valid = false
        }
        return valid
    }
    const handleSubmit = e => {
        if (validateForm()) {
            props.addTask(state)
        } else {
            console.log('Invalid Form')
        }
    }

    const handleChange = e => {
        setSate({
            ...state,
            [e.target.name]: e.target.value,
            todo_lists_id: props.todoListId
        })
    }

    const deleteTask = (taskId) => {
        props.deleteTask(taskId)
        message.success(`Task was deleted!`);
    }

    const toggleCompleted = (taskId, completed) => {
        console.log(completed)
        props.toggleCompleted(taskId, { completed: completed })
    }

    return (
        <div className='list-box'>
            <h3>TO-DO LIST</h3>
            <Form>
                <Row type="flex" justify="space-around">
                    <Col span={20}>
                        <Form.Item
                            name="task"
                            rules={[
                                {
                                    required: true,
                                    message: 'Task is required!',
                                },
                            ]}
                        >
                            <Input
                                type="text"
                                name="task"
                                value={state.task}
                                onChange={handleChange}
                                placeholder="Task"
                                size="small"
                            />
                        </Form.Item>
                    </Col>
                    <Col span={4}>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" onClick={handleSubmit}>add</Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>

            {/* =====================todo list======================== */}
            {props.task && props.task.map(task => (

                <Row key={task.id}>
                    <Col span={20}>
                        <Checkbox
                            key={task.id}
                            className={task.completed ? "completed" : "notCompleted"}
                            onClick={() => toggleCompleted(task.id, !task.completed)}
                        >
                            {task.task}
                        </Checkbox >

                    </Col>
                    <Col span={4}>
                        <Popconfirm
                            title="Are you sure delete this task?"
                            onConfirm={() => deleteTask(task.id)}
                            okText="Yes"
                            cancelText="No"
                        >
                            <CloseSquareOutlined />
                        </Popconfirm>
                    </Col>
                </Row>

            ))}
        </div>);
}


const mapStateToProps = state => ({
    isLoading: state.todoReducer.isLoading,
    task: state.todoReducer.task,
    error: state.todoReducer.error
})

export default withRouter(
    connect(
        mapStateToProps,
        { getPartyById, addTask, deleteTask, toggleCompleted }
    )(TodoForm)
)