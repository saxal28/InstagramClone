import React from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { PostsPage } from "./pages/Posts";
import { LoginPage } from "./pages/Login";
import "typeface-roboto";
import { RegisterPage } from "./pages/Register";
import { connect } from "react-redux";

function mapStateToProps(state) {
  const { loggedIn, user } = state.authReducer || {};
  return {
    loggedIn,
    user
  };
}

export default connect(
  mapStateToProps,
  null
)(props => {
  return (
    <Layout>
      {/* protected routes */}
      {props.loggedIn && (
        <span>
          <Route exact path="/" component={PostsPage} />
          <Route path="/login" component={LoginPage} />
        </span>
      )}

      {/* anonymous routes */}
      <Route path="/register" component={RegisterPage} />

      {/* unauthorized routes */}
      {!props.loggedIn && (
        <span>
          <Route path="/register" component={RegisterPage} />
          <Route component={LoginPage} />
        </span>
      )}
    </Layout>
  );
});
