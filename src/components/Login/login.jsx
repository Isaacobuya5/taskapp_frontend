import React, { useState } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginMember } from "../../redux/actions/memberActions";
import "./login.css";

const Login = props => {
  const [redirectNext, setRedirectNext] = useState(false);
  const { loginMember } = props;
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
    loginMember(email, password).then(() =>  setRedirectNext(true))
  };

  return (
    <>
    {redirectNext && <Redirect to="/add_task" />}
    <div className="login">
      <div class="card" style={{ width: "42rem", height: "32" }}>
        <div class="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                value={email}
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
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
            Not a Registered User. Click <Link to="/register">here</Link> to
            register into the application
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    loginMember: (email, password) => dispatch(loginMember(email, password))
  };
};

export default connect(null, mapDispatchToProps)(Login);
