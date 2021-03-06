/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export default function MyRoute({ component: Component, isClosed, ...rest }) {
  const isLoggedIn = true;

  if (isClosed && !isLoggedIn) {
    return (
      <Redirect
        to={{
          pathname: '/',
          state: { prevPath: rest.location.pathname },
        }}
      />
    );
  }

  return <Route {...rest} component={Component} />;
}

MyRoute.defaultProps = {
  isClosed: false,
};

MyRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isClosed: PropTypes.bool,
};
