import React, { useState, useEffect, useReducer } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getParties, getPartyById, addParty } from '../../store/actions';
import PartyForm from './PartyForm';
import { Modal, Button, Spin } from 'antd';
import './partyList.scss'
import { partyReducer, initialState } from '../../store/reducers/partyReducer';

const PartyList = (props) => {
    const [form, setForm] = useState(false)
    const [state, dispatch] = useReducer(partyReducer, initialState);

    useEffect(() => {
        props.getParties();
    }, [])

    //form function
    const handleAddButton = () => {
        setForm(!form);
    }
    const handleCancelForm = () => {
        setForm(false)
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log('state', state.party)
        props.addParty(props.history, state.party)
    }

    const getPartyByPartyId = (id) => {
        props.history.push(`/party/${id}`)
    }

    const sortedParties = props.parties.sort((a, b) => { return b.id - a.id })

    return (
        <div className='party-list-container'>
            <h1>All yours parties </h1>
            {props.isLoading && <div><Spin size="large" />{props.isLoading}</div>}
            <Modal
                title="Add Party"
                visible={form}
                onOk={handleSubmit}
                okText="Add"
                onCancel={handleCancelForm}
                
                >
                {props.isLoading && <div><Spin size="large"  style={{ display: 'flex', justifyContent: 'center' }} />{props.isLoading}</div>}
                <PartyForm dispatch={dispatch}
                    setForm={setForm}
                    {...state.party}
                />

            </Modal>


            <div className="parties-wrap">
                <div className="parties-box" onClick={handleAddButton}>
                    <p className="add-icon">+</p>
                    <p>Add party</p>
                </div>
                {sortedParties && sortedParties.map(item => (
                    <div className="parties-box" key={item.id} onClick={() => getPartyByPartyId(item.id)}>
                        <p>{item.party_name}</p>
                        <p>{item.guests}</p>
                        <p>{item.date}</p>
                        <p>{item.budget}</p>
                    </div>
                ))}
            </div>
        </div>);
}

const mapStateToProps = state => ({
    isLoading: state.partyReducer.isLoading,
    parties: state.partyReducer.parties,
    error: state.partyReducer.error,
    deleteSuccess: state.partyReducer.deleteSuccess,
    addPartyState: state.partyReducer.addPartyState,
})

export default withRouter(
    connect(
        mapStateToProps,
        { getParties, getPartyById, addParty }
    )(PartyList)
)