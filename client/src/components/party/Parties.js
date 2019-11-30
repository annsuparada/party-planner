import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {getPartyByCategory, getPartyById} from '../../store/actions';
import PartyForm from './PartiesForm';
import './parties.scss'

const Parties = props => {
  const [form, setForm] = useState(false)
  const categoryId = props.match.params.id;

  //get party list
  useEffect(()=>{
      props.getPartyByCategory(categoryId);
    }, [])

  //form function
  const handleAddButton = () => {
    setForm(!form);
  }
  const handleCancelForm = () => {
    setForm(false)
  }

    //get individual party
    const getParty = (id) => {
      // const id = props.partyId
      // props.getPartyById(id)
      props.history.push(`/party/${id}`)
  }

    return (
        <>
          <Link to="/categories">Back</Link>
          <p>Party Category: {categoryId}</p>
          {props.error && <p>{props.error}</p>}

          {/* add form */}
          <button onClick={handleAddButton}>Add party</button>
          { form ? (
            <PartyForm categoryId={categoryId} handleCancelForm={handleCancelForm} setForm={setForm}/>
          ) : null} <br/>

            {/* party list clickable */}
          <div className="party-list-container">
          {props.parties && props.parties.map(item => ( 
            <div key={item.id}>
              <button className="party-btn" onClick={() => getParty(item.id)}>{item.party_name}</button>
            </div>
            ))}
          </div>
        </>
    )
}

const mapStateToProps = state => ({
  isLoading: state.partyReducer.isLoading,
  parties: state.partyReducer.parties,
  error: state.partyReducer.error
})

export default withRouter(
  connect(
    mapStateToProps,
    { getPartyByCategory, getPartyById}
  )(Parties)
)