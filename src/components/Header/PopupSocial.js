import React, { Component, Fragment } from 'react';
import {SocialPopup} from './style/Header-styled';

export default class PopupSocial extends Component{
  stopPropagationFunc = (e) => {
    e.stopPropagation();
  }

  render() {
    console.log(this.props)
    return (
      <Fragment>
        {
          this.props.isPopupOpen ?
            <SocialPopup onClick={this.props.closeSocial} onTouchStart={this.stopPropagationFunc} onTouchEnd={this.stopPropagationFunc}>
              <span>
                <a href="https://www.facebook.com/graveizjewellery/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"/></a>
                <a href="https://www.instagram.com/graveiz_official/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"/></a>
                <a href="https://www.youtube.com/channel/UCl3QzEiUe3Cv6rMInMNofPA" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"/></a>
              </span>
            </SocialPopup> : null
        }
      </Fragment>
    );
  }

}
