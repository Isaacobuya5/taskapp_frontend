import React, { useState, useEffect } from "react";

import Logout from "../Logout/logout";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./header.css";

const Header = props => {
  const { currentUser, buttonStatus } = props;
  const { clicked } = buttonStatus;
  console.log(buttonStatus.clicked);
  console.log(currentUser);

  // getting loggedIn Status
  const { loggedIn } = currentUser;
  console.log(loggedIn);

  return (
    <>
      <div className="header">
        <span className="title">
          <h3>Task Application</h3>
        </span>
        {clicked ? <Logout /> : ""}
      </div>
    </>
  );
};

const mapStateToProps = ({ currentUser, buttonStatus }) => {
  return {
    currentUser,
    buttonStatus
  };
};

export default withRouter(connect(mapStateToProps)(Header));
