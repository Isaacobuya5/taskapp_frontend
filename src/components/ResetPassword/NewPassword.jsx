import React, { useState, useEffect } from "react";
// FORGOT PASSWORD API
import { createNewPassword, updatePassword } from "../../api/membersApi";
import { Redirect } from "react-router-dom";
import { handleErrors } from "../../redux/actions/memberActions";
import { connect } from "react-redux";
import "./resetpassword.css";

const NewPassword = props => {
  const { handleErrors } = props;
  // initial state for the form fields
  const [newPassword, setNewPassword] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  // const [valid, setValid] = useState(true);

  // checking for token in the local storage

  useEffect(() => {
    const { token } = props.match.params;
    console.log(token);
    createNewPassword(token)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        handleErrors(error);
        // setValid(false);
      });
  }, []);

  const { email, password, confirmPassword } = newPassword;

  const handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    setNewPassword({
      ...newPassword,
      [name]: value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (password === confirmPassword) {
      updatePassword(email, password)
        .then(() => {
          console.log("Password succesfully updated");
          return props.history.push("/");
        })
        .catch(error => console.log(error));
    }
  };

  return (
    <>
      {localStorage.getItem("userData") !== null ? (
        <div className="forgot_password">
          <div className="card" style={{ width: "32rem", height: "32" }}>
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
                  <label>New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={password}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Confirm New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                  />
                </div>
                <div className="form_button">
                  <button type="submit" className="btn btn-primary">
                    Confirm
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

const mapStateToProps = ({ exists, message }) => {
  return {
    exists,
    message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleErrors: error => dispatch(handleErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPassword);
