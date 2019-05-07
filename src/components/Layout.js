import React, { Fragment } from 'react';
import {BrowserRouter} from 'react-router-dom';
import {createGlobalStyle} from "styled-components";
import Header from "./Header/Header";
import Routing from "./Routing";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    color: #cdcdcd;
  }
`;

export default () => (
  <Fragment>
    <GlobalStyle />
      <Header />
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
  </Fragment>
);
