import React, { Fragment } from 'react';
import {createGlobalStyle} from "styled-components";
import Header from "./Header/Header";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    color: #cdcdcd;
  }
`;

export default (props) => (
  <Fragment>
    <GlobalStyle />
      <Header />
    {props.children}
  </Fragment>
);
