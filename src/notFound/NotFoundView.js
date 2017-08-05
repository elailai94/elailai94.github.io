import React, { Component } from 'react';
import {
  Container,
  Segment,
} from 'semantic-ui-react';

import Heading from '../common/components/Heading';
import Subheading from './components/Subheading';
import logPageView from '../common/analytics/Analytics';

class NotFoundView extends Component {
  componentDidMount() {
    document.title = 'Elisha Lai - Not Found';
    logPageView();
  }

  render() {
    return (
      <Segment
        inverted
        padded
        color={'teal'}
        style={styles.segment}
      >
        <Container textAlign={'center'}>
          <Heading text={"Oh no! It looks like you're lost."} />
          <Subheading />
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

export default NotFoundView;
