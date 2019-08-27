import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { WrapHeader, WrapperMenuHeader,InnerHeader, WrapSocial, WrapPhoneHeader, WrapLang, LogoIcon, WrapperIconLogo } from './style/Header-styled';
import connect from "react-redux/es/connect/connect";
import { setLocal } from '../../redux/actions/locale';
import PopupSocial from './PopupSocial';
import {Link} from "react-router-dom";

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
              <WrapperIconLogo href='/'>
                <LogoIcon />
              </WrapperIconLogo>
              <WrapLang>
                <div onClick={()=> {this.props.setLocal('en'); this.addLocalstorage('en')}}>EN</div>
                  <span>|</span>
                <div onClick={()=> {this.props.setLocal('ru'); this.addLocalstorage('ru')}}>RU</div>
              </WrapLang>
              <WrapSocial>
                <div onClick={()=> { this.showSocial() }} className="followUs">Follow Us</div>
                <Link to="/location">
                  <div className="contactUs" >Boutique locator</div>
                </Link>
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
