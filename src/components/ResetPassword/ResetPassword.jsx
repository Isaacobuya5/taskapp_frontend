import React, { useState } from "react";
// FORGOT PASSWORD API
import { resetPassword } from "../../api/membersApi";
import "./resetpassword.css";

const ResetPassword = () => {
  // initial state for the form
  const [email, setEmail] = useState("");

  const handleChange = event => {
    event.preventDefault();
    const { value } = event.target;
    setEmail(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // use 36fe6ea78c-827f14@inbox.mailtrap.io as a test email
    resetPassword(email).then(() =>
      alert(
        `An email has been sent to ${email}. Kindly check to reset your password`
      )
    );
  };

  return (
    <div className="forgot_password">
      <div className="card" style={{ width: "32rem", height: "32" }}>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>
                Email the email address you used to create this account
              </label>
              <input
                type="email"
                className="form-control"
                value={email}
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="form_button">
              <button type="submit" className="btn btn-primary">
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
