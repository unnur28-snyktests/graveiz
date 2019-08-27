import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 55.7338612,
      lng: 37.6648933
    },
    zoom: 15,
    marker: 'Graveiz shop'
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAUBMIHegkn38qcdUhBfNv-323tKouiQ6E' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={55.7338612}
            lng={37.6648933}
            text="Graveiz shop"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;