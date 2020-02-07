import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = WrappedComponent => ({
  isValidUser,
  ...otherProps
}) => {
  return isValidUser === null ? (
    <Redirect to="/" />
  ) : (
    <WrappedComponent {...otherProps} />
  )
};