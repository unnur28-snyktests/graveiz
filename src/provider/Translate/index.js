import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { addLocaleData } from "react-intl";
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import { connect } from 'react-redux';
import messages from '../../translations/messages'

addLocaleData(en);
addLocaleData(ru);

class TranslateProvider extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      locale: ''
    };
  }
  render() {
    const { lang, children } = this.props;
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        { children }
      </IntlProvider>
    );
  }
}

TranslateProvider.propTypes = {
  lang: PropTypes.string.isRequired,
};

const mapStateToProps =(state) => {
  return {
    lang: state.locale.lang,
  }
};

export default connect(mapStateToProps)(TranslateProvider);
