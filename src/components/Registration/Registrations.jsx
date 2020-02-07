import React, { useState } from "react";
import { connect } from "react-redux";
import { addNewMember } from "../../redux/actions/memberActions";

import "./registration.css";

const Registration = props => {
  // destructuring the props
  const { addNewMember } = props;

  const [member, setMember] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState("");

  const { userName, email, password, confirmPassword } = member;

  const handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    setMember({
      ...member,
      [name]: value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    password === confirmPassword
      ? addNewMember({
          username: userName,
          email,
          password
        })
          .then(() => console.log("Success"))
          .catch(error => console.log(error))
      : setError("Sorry, your passwords does not match");
  };
  return (
    <div className="registration">
      <div class="card" style={{ width: "42rem", height: "32" }}>
        <div class="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                className="form-control"
                name="userName"
                value={userName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={email}
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
            <div className="form-group">
              <label>Confirm Password</label>
              <br />
              {error ? <small className="error">{error}</small> : ""}
              <input
                type="password"
                className="form-control"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addNewMember: member => dispatch(addNewMember(member))
  };
};

export default connect(null, mapDispatchToProps)(Registration);
