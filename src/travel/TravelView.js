import React, { Component } from 'react';
import {
  Container,
  Segment,
} from 'semantic-ui-react';
import { connect } from 'react-redux';

import CommonSettings from '../common/constants/Settings';
import Settings from './constants/Settings';
import TravelMap from './components/TravelMap';
import {
  getStatus,
  getResponse,
  getError,
} from './selectors/TravelHistorySelectors';
import { selectRoute } from '../common/actions/NavigationActions';
import { getLocationsVisited } from './actions/TravelHistoryActions';
import logPageView from '../common/analytics/Analytics';

class TravelView extends Component {
  componentWillMount() {
    const accessToken = Settings.foursquare.ACCESS_TOKEN;
    const { getLocationsVisited } = this.props;

    getLocationsVisited(accessToken);
  }

  componentDidMount() {
    const { selectRoute } = this.props;

    selectRoute('travel');
    document.title = 'Elisha Lai - Travel';
    logPageView();
  }

  render() {
    const color = CommonSettings.website.COLOR;
    const { response } = this.props;

    return (
      <Segment
        inverted
        padded
        color={color}
        style={styles.segment}
      >
        <Container>
          <TravelMap locations={response} />
        </Container>
      </Segment>
    );
  }
}

const styles = {
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
    selectRoute: name => dispatch(selectRoute(name)),
    getLocationsVisited: accessToken => dispatch(getLocationsVisited(accessToken)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TravelView);
