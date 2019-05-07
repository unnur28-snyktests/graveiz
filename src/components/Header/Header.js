import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { WrapHeader, HeaderText, WrapperMenuHeader,InnerHeader, WrapSocial, WrapPhoneHeader, WrapLang } from './style/Header-styled';
import connect from "react-redux/es/connect/connect";
import { setLocal } from '../../redux/actions/locale';
import PopupSocial from './PopupSocial';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPopupOpen: false,
    };
  }
  addLocalstorage(dataLang) {
    localStorage.setItem('alhubLang', dataLang);
  }
  showSocial = () => {
    this.setState(
      {isPopupOpen: true}
    )
  }
  closeSocial = () => {
    console.log('click');
    this.setState({
      isPopupOpen: false
    })
  }

  render() {
    return (
      <Fragment>
        <WrapHeader>
          <InnerHeader>
            <HeaderText> </HeaderText>
            <WrapperMenuHeader>
              <WrapLang>
                <div onClick={()=> {this.props.setLocal('en'); this.addLocalstorage('en')}}>EN</div>
                  <span>|</span>
                <div onClick={()=> {this.props.setLocal('ru'); this.addLocalstorage('ru')}}>RU</div>
              </WrapLang>
              <WrapSocial>
                <div onClick={()=> { this.showSocial() }}>Follow Us</div>
                <PopupSocial isPopupOpen={this.state.isPopupOpen} closeSocial={this.closeSocial} />
              </WrapSocial>
              <WrapPhoneHeader>
                <a href="tel:+79672683410">+79672683410</a>
              </WrapPhoneHeader>
            </WrapperMenuHeader>
          </InnerHeader>
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
