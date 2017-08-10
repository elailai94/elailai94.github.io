import React, { Component } from 'react';
import {
  Container,
  Segment,
} from 'semantic-ui-react';
import {
  Map,
  Marker,
  GoogleApiWrapper
} from 'google-maps-react';
import { connect } from 'react-redux';

import CommonSettings from '../common/constants/Settings';
import Settings from './constants/Settings';
import {
  getStatus,
  getResponse,
  getError,
} from './selectors/TravelHistorySelectors';
import { getLocationsVisited } from './actions/TravelHistoryActions';
import logPageView from '../common/analytics/Analytics';

class TravelMapView extends Component {
  componentWillMount() {
    const { getLocationsVisited } = this.props;
    getLocationsVisited('240DUWDOGAYYAK5TA13DKOOKQ2I1CTPZLQS0RY4XYLDGUN13');
  }

  componentDidMount() {
    document.title = 'Elisha Lai - Travel Map';
    logPageView();
  }

  render() {
    const color = CommonSettings.website.COLOR;
    const { google } = this.props;
    const { response } = this.props;

    return (
      <Segment
        inverted
        padded
        color={color}
        style={styles.segment}
      >
        <Container>
          <Map
            google={google}
            initialCenter={{ lat: 0, lng: 0 }}
            style={styles.map}
            zoom={2}
          >
            {response.map(location => {
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
        </Container>
      </Segment>
    );
  }
}

const styles = {
  map: {
    height: '100%',
    width: '85%',
  },
  segment: {
    minHeight: '75vh',
  },
};

function mapStateToProps(state) {
  return {
    status: getStatus(state),
    response: getResponse(state),
    error: getError(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getLocationsVisited: accessToken => dispatch(getLocationsVisited(accessToken)),
  };
}

const apiKey = Settings.google.API_KEY;
const TravelMapViewWrapper = GoogleApiWrapper({ apiKey })(TravelMapView);
export default connect(mapStateToProps, mapDispatchToProps)(TravelMapViewWrapper);
