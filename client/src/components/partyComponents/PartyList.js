import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getParties, getPartyById } from '../../store/actions';
import PartyForm from './PartyForm';



const PartyList = (props) => {
    const [form, setForm] = useState(false)
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

    const getPartyByPartyId = (id) => {
        props.history.push(`/party/${id}`)
    }

    const sortedParties = props.parties.sort((a,b) => {return b.id - a.id})

    return (<>
        <h1>PartyList</h1>
        {/* add form */}
        <button onClick={handleAddButton}>Add party</button>
        {form ? (
            <PartyForm handleCancelForm={handleCancelForm} setForm={setForm} />
        ) : null} <br />

        {sortedParties && sortedParties.map(item => (
            <div key={item.id} onClick={() => getPartyByPartyId(item.id)}>
                <p>{item.party_name}</p>
                <p>{item.guests}</p>
                <p>{item.date}</p>
                <p>{item.budget}</p>
            </div>
        ))}
    </>);
}

const mapStateToProps = state => ({
    isLoading: state.partyReducer.isLoading,
    parties: state.partyReducer.parties,
    error: state.partyReducer.error
})

export default withRouter(
    connect(
        mapStateToProps,
        { getParties, getPartyById }
    )(PartyList)
)