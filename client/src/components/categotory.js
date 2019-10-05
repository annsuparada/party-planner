import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getPartyByCategory } from "../store/actions/index";

const Category = props => {


    // React.useEffect(()=> {
    //     getPartyByCategory()
    // }, [])

    return (
        <pre>
            {/* {JSON.stringify(props, null, 4)} */}
        
        <button onClick={getPartyByCategory}>{props.list.category}</button>
        </pre>
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