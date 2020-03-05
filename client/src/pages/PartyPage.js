import React from 'react';
import Party from '../components/partyComponents/Party';
import NavBar from '../components/navBar/NavBar';
const PartyPage = (props) => {
    return ( 
        <>
        {console.log('party props', props)}
        <NavBar />
        <Party />
        </>
     );
}
 
export default PartyPage;