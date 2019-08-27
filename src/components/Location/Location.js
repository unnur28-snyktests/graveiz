import React, { Component } from 'react';
import SimpleMap from "./MapComponent";
import {MapWrapper, WrapperLocation} from './style/Location-styles';
import {FormattedMessage} from "react-intl";

export default class Location extends Component{
  render() {
    return (
      <WrapperLocation>
        <h1>
          <FormattedMessage id="app.adress"/>
        </h1>
        <div className="street">
          <FormattedMessage id="app.adressStreet"/>
        </div>
        <div className="phone">
          +7 (967) 268-34-10
        </div>
        <MapWrapper>
          <SimpleMap />
        </MapWrapper>
        <div className="socialWrapper">
            <a href="https://www.facebook.com/graveizjewellery/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"/></a>
            <a href="https://www.instagram.com/graveiz_official/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"/></a>
            <a href="https://www.youtube.com/channel/UCl3QzEiUe3Cv6rMInMNofPA" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"/></a>
        </div>
      </WrapperLocation>
    );
  }

}
