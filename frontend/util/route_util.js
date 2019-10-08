import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.id)
});

// <AuthRoute path="" component={} />

const Auth = ({ loggedIn, path, component: Component, ...props }) => (
  <Route
    path={path}
    render={otherProps => (
      loggedIn ? <Redirect to="/" /> : <Component {...props} {...otherProps }/>
    )}
  />
);

const Protected = ({ loggedIn, path, component: Component, ...props }) => (
  <Route
    path={path}
    render={otherProps => (
      loggedIn ? <Component {...props} {...otherProps} /> : <Redirect to="/signup" />
    )}
  />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));