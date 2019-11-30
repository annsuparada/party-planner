import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getPartyByCategory, getCategories } from "../../store/actions";
import Loader from 'react-loader-spinner';

const Category = props => {

    const getParties = (event) => {
        const id = props.categoryId
        props.getPartyByCategory(id)
        props.history.push(`/categories/${id}/party`)
    }

    return (
        <>
        <button className="btn" onClick={getParties}>
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
       </>
        )
}


export default withRouter(
    connect(
      null,
      { getPartyByCategory, getCategories }
    )(Category)
  )