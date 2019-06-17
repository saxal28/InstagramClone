import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { PostsPage } from "./pages/Posts";
import { LoginPage } from "./pages/Login";
import "typeface-roboto";
import { RegisterPage } from "./pages/Register";

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Route exact path="/" component={PostsPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
      </Layout>
    );
  }
}
