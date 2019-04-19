import React, { Component, Fragment } from 'react';
import {HeqaderText} from './style/Products-styled'
import {Link} from "react-router-dom";

export default class MainPage extends Component{
  render() {
    return (
		<Fragment>
				<HeqaderText>Product Page</HeqaderText>
      <Link to="/">
        Main Page
      </Link>
      <Link to="/Categories">
        Categories Page
      </Link>
    </Fragment>
    );
  }

}
