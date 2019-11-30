import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {getPartyByCategory} from '../../store/actions';
import PartyForm from './PartiesForm';

const Parties = props => {
  const [form, setForm] = useState(false)
  const categoryId = props.match.params.id;

  useEffect(()=>{
      props.getPartyByCategory(categoryId);
    }, [])
    const handleAddButton = () => {
      setForm(!form);
    }
    const handleCancelForm = () => {
      setForm(false)
    }
    return (
        <>
          <Link to="/categories" refresh="true">Back</Link>
          <p>Party Category: {categoryId}</p>
          {props.error && <p>{props.error}</p>}
          <button onClick={handleAddButton}>Add party</button>
          { form ? (
            <PartyForm categoryId={categoryId} handleCancelForm={handleCancelForm} setForm={setForm}/>
          ) : null}
          {props.parties && props.parties.map(item => ( 
            <p>{item.party_name}</p>

          ))}
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
    { getPartyByCategory}
  )(Parties)
)