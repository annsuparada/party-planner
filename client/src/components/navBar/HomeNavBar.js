import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from "react-router-dom";
import { logout } from '../../store/actions/index';
import logo from '../../styles/img/logo-party-planner.png';

import './navBar.scss'


const NavBar = (props) => {
    return (
        <div className="nav-container">
            <div className="nav">
                <div className="nav-item">
                    <Link to='/'><img src={logo} alt="logo party planner" /></Link>
                </div>
                <div className="nav-item">
                    <Link to='/login' >LOGIN</Link>
                    <Link to='/register' >SIGN UP</Link>
                </div>
            </div>
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