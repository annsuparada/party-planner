import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {getParties, getPartyById} from '../../store/actions';
import PartyForm from './PartiesForm';
import './parties.scss'

const Party = props => {
    console.log('props', props)
    const partyId = props.match.params.id
    useEffect(() => {
        props.getPartyById(partyId)
    }, [])

const goBacktoParties = () => {
    props.history.goBack()
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
    { getParties, getPartyById}
  )(Party)
)