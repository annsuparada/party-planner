import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getPartyByCategory } from "../store/actions/index";
import Parties from "./Parties";
import Loader from 'react-loader-spinner';

const Category = props => {

    // let newPartyList =  response.data.filter(item => {
    //                 if (item.category_id == ?) {
    //                     return item;
    //                 }
    //             })

    // props.list.id === props.partyList.category_id
    useEffect(() => {
        
    })

    return (
        <>
        <button className="btn" onClick={props.getPartyByCategory}>
            {props.isLoading ? (
                <Loader
                    type="TailSpin"
                    color="#00BFFF"
                    height={100}
                    width={100}
            /> ):(
                <h1>{props.list.category}</h1>
            )}
            
        </button>
        {props.error && <p className="error">{props.error}</p>}
        {props.parties && props.parties.map(item => 
            <Parties key={item.id} partyList={item}/>
        )}
       </>
        )
}

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    parties: state.parties,
    error: state.error
})

export default withRouter(
    connect(
      mapStateToProps,
      { getPartyByCategory }
    )(Category)
  )