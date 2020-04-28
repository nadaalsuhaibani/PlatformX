import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { signout } from "../services/login/auth";
import {connect} from "react-redux";
import {compose} from "redux";
import {firebaseConnect} from "react-redux-firebase";

class Navbar extends Component {

  render() {

    const userLinks = (
        <a href="/" onClick={() => this.props.signout()}>Logout</a>
    );

    const guestLinks = (
      <Link to="/login">Login</Link>
    );
    return (
      <div className="header">
        <a href="/" className="logo">PlatformX</a>
        <div className="header-right">
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          { !this.props.auth.isEmpty ? userLinks : guestLinks }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.firebaseReducer.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signout: () => dispatch(signout())
  };
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Navbar);
