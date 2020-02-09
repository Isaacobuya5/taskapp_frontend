import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = WrappedComponent => ({
  isValidUser,
  ...otherProps
}) => {
  console.log(isValidUser);
  return !isValidUser ? (
    <Redirect to="/" />
  ) : (
    <WrappedComponent {...otherProps} />
  );
};
