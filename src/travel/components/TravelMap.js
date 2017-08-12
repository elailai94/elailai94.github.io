import React, { Component } from 'react';
import {
  Map,
  Marker,
  GoogleApiWrapper,
} from 'google-maps-react';
import PropTypes from 'prop-types';

import Settings from '../constants/Settings';

class TravelMap extends Component {
  render() {
    const { google } = this.props;
    const { locations } = this.props;

    return (
      <Map
        google={google}
        initialCenter={{ lat: 0, lng: 0 }}
        style={styles.map}
        zoom={2}
      >
        {locations.map(location => {
          const { id } = location;
          const { name } = location;
          const { lat } = location;
          const { lng } = location;

          return (
            <Marker
              key={id}
              name={name}
              position={{lat: lat, lng: lng}}
            />
          );
        })}
      </Map>
    );
  }
}

TravelMap.propTypes = {
  locations: PropTypes.array.isRequired,
};

const styles = {
  map: {
    height: '100%',
    width: '88%',
  },
};

const apiKey = Settings.google.API_KEY;
const TravelMapWrapper = GoogleApiWrapper({ apiKey })(TravelMap);
export default TravelMapWrapper;
