import React from "react";
import { Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";
const PrivateRoute = ({ component: Component, user, ...rest }) => {
  return (
    <Route
      {...rest}
    
      render={props => {
        console.log(props.match.path)
        if(props.match.path =='/create-profile')
        {
          if (user.isLogin) {
            return <Component {...props} />;
            
          } else if (!user.isAuth) {
            return <Redirect to='/login' />;
          }
        }
        if (user.isLogin) {
          return <Redirect to='/create-profile' />;
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