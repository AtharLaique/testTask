import React from "react";
import { Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";
const PrivateRoute = ({ component: Component, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (user.isLogin) {
          return <Redirect to='/' />;
        } else if (!user.isAuth) {
          return <Component {...props} />;
        }
      }}
    />
  );
};
const mapStateToProps = state => ({
  user: state.Auth
});
export default connect(mapStateToProps)(PrivateRoute);