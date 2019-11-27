import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {getPartyByCategory} from '../store/actions';


const Parties = props => {
  console.log('props', props)
  const categoryId = props.match.params.id;
  useEffect(()=>{
      props.getPartyByCategory(categoryId);
    }, [])
    // TODO fetch parties in this category
    return (
        <>
          <p>Party Category: {categoryId}</p>
          {props.error && <p>{props.error}</p>}
          {props.parties && props.parties.map(item => (
            <p>{item.party_name}</p>

          ))}
          <Link to="/categories">Back</Link>
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