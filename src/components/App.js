import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import { addLocaleData } from "react-intl";
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import { connect } from 'react-redux';
import messages from '../translations/messages'
import Header from './Header/Header';

addLocaleData(en);
addLocaleData(ru);

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
`;

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      locale: ''
    };
  }
  render() {
    const { lang } = this.props;
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <BrowserRouter>
            <Fragment>
              <GlobalStyle />
              <Header />
              <Layout />
            </Fragment>
        </BrowserRouter>
      </IntlProvider>
    );
  }
}

App.propTypes = {
  lang: PropTypes.string.isRequired,
};

const mapStateToProps =(state) => {
  return {
    lang: state.locale.lang,
  }
};

export default connect(mapStateToProps)(App);
