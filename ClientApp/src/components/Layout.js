import React from "react";
import { Header } from "./Header";
import Container from "@material-ui/core/Container";

export const Layout = props => {
  return (
    <div>
      <Header/>
      {props.children}
    </div>
  );
};
