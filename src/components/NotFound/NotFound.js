import React, { Component, Fragment } from 'react';
import {HeqaderText} from './style/notFound-styled';
import {Link} from "react-router-dom";

export default class NotFound extends Component{
  render() {
    return (
      <Fragment>
        <HeqaderText>404 Page</HeqaderText>
        <Link to="/">
          Got to main Page
        </Link>
      </Fragment>
    );
  }

}
