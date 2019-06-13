import React from "react";
import { Header } from "./Header";
import Container from "@material-ui/core/Container";

export const Layout = props => {
  return (
    <div>
      <Header/>
      <div style={{height: 120}} ></div>
      <Container maxWidth="md">{props.children}</Container>
      <div style={{height: 50}}></div>
    </div>
  );
};
