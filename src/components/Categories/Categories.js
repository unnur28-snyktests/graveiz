import React, { Component, Fragment } from 'react';
import {HeqaderText} from './style/Categories-styled'
import {Link} from "react-router-dom";

export default class Categories extends Component{
  render() {
    return (
		<Fragment>
				<HeqaderText>Main Page</HeqaderText>
      <Link to="/">
        Main Page
      </Link>
      <Link to="/Products">
        Products Page
      </Link>
    </Fragment>
    );
  }
}
