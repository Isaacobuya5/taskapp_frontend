import React from "react";

import Logout from "../Logout/logout";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./header.css";

const Header = props => {
  const { buttonStatus } = props;
  const { clicked } = buttonStatus;

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
