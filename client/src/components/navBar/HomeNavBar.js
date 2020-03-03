import React, {useState} from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter, Link } from "react-router-dom";
import { logout } from '../../store/actions/index'


import './navBar.scss'


const NavBar = (props) => {
    return (
        <div className="nav">
            <Link to='/login' >LOGIN</Link>
            <Link to='/register' >SIGN UP</Link>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.credentialReducer.isLoggedIn,
})

export default withRouter(
    connect(
        mapStateToProps,
        { logout }
    )(NavBar)
)