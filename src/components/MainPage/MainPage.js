import React, { Component } from 'react';
import {HeqaderText, MainPageWrapper, MainBanner, SecondBanner, ThirdBanner} from './style/MainPage-styled';
import { Link } from 'react-router-dom';
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';

export default class MainPage extends Component{
  render() {
    return (
      <MainPageWrapper>
        <MainBanner>
          <div className="mianLogo">
            <h1>Graveiz</h1>
            <h2>Gewerly</h2>
          </div>
        </MainBanner>

        <SecondBanner>
          <div className="wrapDiscover">
            <h3>Name collection</h3>
            <h4>Small description collection</h4>
            <Link to="/coolection-one">
              discover
            </Link>
          </div>
        </SecondBanner>
        <ThirdBanner>
          <div className="wrapDiscover">
            <h3>Name collection</h3>
            <h4>Small description collection</h4>
            <Link to="/coolection-one">
              discover
            </Link>
          </div>
        </ThirdBanner>
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
    </MainPageWrapper>
    );
  }

}
