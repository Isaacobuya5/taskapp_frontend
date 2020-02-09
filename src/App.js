import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import { PrivateRoute } from "./components/private/PrivateRoute";
import Header from "./components/Header/Header";
import Login from "./components/Login/login";
import Register from "./components/Registration/Registrations";
import AddTask from "./components/AddTask/AddTask";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import NewPasswordForm from "./components/ResetPassword/NewPassword";

import logo from "./logo.svg";
import "./App.css";

// render component based on user
const CanAddTask = PrivateRoute(AddTask);

function App(props) {
  const [isValidUser, setIsValidUser] = useState(false);

  // check for token availability
  let userToken = localStorage.getItem("token");
  console.log(userToken);

  useEffect(() => {
    userToken ? setIsValidUser(true) : setIsValidUser(false);
  }, [userToken]);

  // const { users } = props;
  // console.log(users);
  // state for validUser
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/register" component={Register} exact />
        {/* <Route
          path="/add_task"
          render={props => <CanAddTask isValidUser={isValidUser} {...props} />}
          exact
        /> */}
        <Route
          path="/add_task"
          render={props =>
            userToken || localStorage.getItem("token") ? (
              <AddTask {...props} />
            ) : (
              <Redirect
                to={{
                  pathname: "/",
                  state: {
                    from: props.location
                  }
                }}
              />
            )
          }
        />
        <Route path="/reset_password" component={ResetPassword} exact />
        <Route path="/new_password/:token" component={NewPasswordForm} exact />
      </Switch>
    </div>
  );
}

const mapStateToProps = ({ users }) => {
  return {
    users
  };
};

export default connect(mapStateToProps)(App);
