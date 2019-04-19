import React, { Component, Fragment } from 'react';
import {HeqaderText} from './style/MainPage-styled';
import { Link } from 'react-router-dom';
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';

export default class MainPage extends Component{
  render() {
    return (
		<Fragment>
      <div>
        <h1 className="App-title">
          <FormattedMessage id="app.title"/>
        </h1>
        ...
        <FormattedHTMLMessage id="app.intro" />
      </div>
				<HeqaderText>Categories Page</HeqaderText>
        <Link data-cy="open-trades-link-enabled" to="/Categories">
          Categories Page
        </Link>
      <Link to="/Products">
        Categories Page
      </Link>
    </Fragment>
    );
  }

}
