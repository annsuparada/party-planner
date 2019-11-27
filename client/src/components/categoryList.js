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
            <Category key={item.id} list={item}  categoryId={item.id}/>
        ))}
        
        </>
    )
}

const mapStateToProps = state => ({
    isLoading: state.categoryReducer.isLoading,
    categories: state.categoryReducer.categories,
    error: state.categoryReducer.error
})

export default withRouter(
    connect(
      mapStateToProps,
      { getCategories }
    )(CategoryList)
  )