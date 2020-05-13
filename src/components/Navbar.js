import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { isLoaded, isEmpty, useFirebase } from 'react-redux-firebase';
import { useSelector } from 'react-redux'

const Navbar = () => {
    const firebase = useFirebase();
    const auth = useSelector(state => state.firebase.auth);

    const userLinks = (
        <a href="/" onClick={() => firebase.logout()}>Logout</a>
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
          { !isLoaded(auth)
            ? <span>Loading...</span>
            : !isEmpty(auth) ? userLinks : guestLinks }
        </div>
      </div>
    )
  }



export default Navbar;
