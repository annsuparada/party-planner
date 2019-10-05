import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getCategories } from "../store/actions/index";

import Category from './categotory'


const CategoryList = props => {
    useEffect(() => {
        props.getCategories()
    },[])

    return (
        <>
        <h2>CategoryList</h2>
        
        {props.categories && props.categories.map(item => (
            <Category key={item.id} list={item}  />
        ))}
        
        </>
    )
}

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    categories: state.categories,
    error: state.error
})

export default withRouter(
    connect(
      mapStateToProps,
      { getCategories }
    )(CategoryList)
  )