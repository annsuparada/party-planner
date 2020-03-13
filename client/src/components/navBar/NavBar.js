import React, {useState} from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter, Link } from "react-router-dom";
import { logout } from '../../store/actions/index'
import { Row, Col } from 'antd';

import './navBar.scss'


const NavBar = (props) => {

    const logout = (event) => {
        event.preventDefault();
        props.logout();
        props.history.push('/login');
        sessionStorage.clear();
      }

    return (
        <div className="nav">
            <Link to='/login' onClick={logout}>LOGOUT</Link>
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