import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { WrapHeader, WrapperMenuHeader,InnerHeader, WrapSocial, WrapPhoneHeader, WrapLang, LogoIcon, WrapperIconLogo } from './style/Header-styled';
import connect from "react-redux/es/connect/connect";
import { setLocal } from '../../redux/actions/locale';
import PopupSocial from './PopupSocial';
import imgLogo from '../../images/logo_icon.png';

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
            <WrapperMenuHeader>
              {/*<WrapperIconLogo href='/'>*/}
                {/*<LogoIcon src={`${imgLogo}`} />*/}
              {/*</WrapperIconLogo>*/}
              <WrapLang>
                <div onClick={()=> {this.props.setLocal('en'); this.addLocalstorage('en')}}>EN</div>
                  <span>|</span>
                <div onClick={()=> {this.props.setLocal('ru'); this.addLocalstorage('ru')}}>RU</div>
              </WrapLang>
              <WrapSocial>
                <div onClick={()=> { this.showSocial() }}>Follow Us</div>
                <div className="contactUs" onClick={()=> { this.showSocial() }}>Contact Us</div>
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
