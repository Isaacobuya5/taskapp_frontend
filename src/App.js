import React, {useState} from 'react';
import {connect} from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import {PrivateRoute } from "./components/private/PrivateRoute";
import Header from "./components/Header/Header";
import Login from "./components/Login/login";
import Register from "./components/Registration/Registrations";
import AddTask from "./components/AddTask/AddTask";
import logo from './logo.svg';
import './App.css';
import ViewTasks from './components/ViewTasks/ViewTasks';

// render component based on user
const CanAddTask = PrivateRoute(AddTask);

function App(props) {
  const { users } = props;
     // state for validUser
    const [isValidUser, setIsValidUser] = useState(users);
  return (
    <div className="container-fluid">
     <Header />
     <Switch>
       <Route path="/" component={Login} exact />
       <Route path="/register" component={Register} exact />
       <Route path="/add_task" render={props => (<CanAddTask isValidUser={isValidUser} {...props} />)}  exact />
       <Route path="/view_tasks" component={ViewTasks} exact />
     </Switch>
    </div>
  );
}


const mapStateToProps = ({ users }) => {
    return {
        users
    }
}

export default connect(mapStateToProps)(App);
