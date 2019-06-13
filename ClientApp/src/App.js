import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { PostsPage } from "./pages/Posts";
import "typeface-roboto";

export default class App extends Component {
  displayName = App.name;

  render() {
    return (
      <Layout>
        <Route path="/" component={PostsPage} />
      </Layout>
    );
  }
}
