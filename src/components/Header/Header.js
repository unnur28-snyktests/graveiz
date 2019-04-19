import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { WrapHeader, HeaderText, WrapperLang } from './style/Header-styled';
import connect from "react-redux/es/connect/connect";
import { setLocal } from '../../redux/actions/locale'

class Header extends React.Component {
  addLocalstorage(dataLang) {
    localStorage.setItem('alhubLang', dataLang);
  }
  render() {
    return (
      <Fragment>
        <WrapHeader>
          <HeaderText>Header Page</HeaderText>
          <WrapperLang>
            <div onClick={()=> {this.props.setLocal('en'); this.addLocalstorage('en')}}>EN</div> |
            <div onClick={()=> {this.props.setLocal('ru'); this.addLocalstorage('ru')}}>Ru</div>
          </WrapperLang>
        </WrapHeader>
      </Fragment>
    );
  }

}

Header.propTypes = {
  setLocal: PropTypes.func.isRequired,
};

const mapStateToProps =(state) => {
  return {
    lang: state.locale.lang,
  }
};

export default connect(mapStateToProps, {setLocal})(Header);
