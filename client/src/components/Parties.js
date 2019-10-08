import React from 'react';
import { Link } from 'react-router-dom';

const Parties = props => {

    return (
        <>
        {/* <Link to="/parties">{props.partyList.party_name}</Link> */}
      <h1>{props.partyList.party_name}</h1>
        </>
    )
}

export default Parties;