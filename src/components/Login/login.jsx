import React, { useState } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { loginMember } from "../../redux/actions/memberActions";

import "./login.css";

const Login = props => {
  const { loginMember, history, errorStatus } = props;
  const { exists, message } = errorStatus;

  console.log(message);
  console.log(exists);

  // state for the current user
  const [user, setCurrentUser] = useState({
    email: "",
    password: ""
  });

  const { email, password } = user;

  const handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    setCurrentUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // dispatching the login action
    loginMember(email, password).then(() => {
      if (!exists) {
        // buttonClicked();
        return history.push("/add_task");
      }
      alert(message);
    });
  };

  return (
    <>
      <div className="login">
        <div className="card" style={{ width: "42rem", height: "32" }}>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
            <hr />
            <p>
              Forgot your Password. Click{" "}
              <Link to="/reset_password"> here</Link> to set a new Password OR
              Not a Registered User. Click <Link to="/register">here</Link> to
              register into the application
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ errorStatus }) => {
  return {
    errorStatus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginMember: (email, password) => dispatch(loginMember(email, password))
    // buttonClicked: () => dispatch(buttonClickedAction())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
