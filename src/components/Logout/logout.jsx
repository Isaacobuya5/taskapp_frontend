import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  logoutMember,
  buttonClickedLogout
} from "../../redux/actions/memberActions";

const Logout = ({ logoutMember, history, clickLogout }) => {
  return (
    <div style={{ color: "#fff", position: "absolute", right: "25px" }}>
      <button
        onClick={() => {
          logoutMember().then(() => {
            clickLogout();
            history.push("/");
          });
          // history.push("/")
        }}
        type="submit"
        className="btn btn-primary"
      >
        {" "}
        Logout{" "}
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    logoutMember: () => dispatch(logoutMember()),
    clickLogout: () => dispatch(buttonClickedLogout())
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Logout));
