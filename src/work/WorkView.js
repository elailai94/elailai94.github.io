import React, { Component } from 'react';
import {
  Container,
  Segment,
} from 'semantic-ui-react';

import Projects from './constants/Projects';
import ProjectCards from './components/ProjectCards';
import logPageView from '../common/analytics/Analytics';

class WorkView extends Component {
  componentDidMount() {
    document.title = 'Elisha Lai - Work';
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
        <Container>
          <ProjectCards projects={Projects} />
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

export default WorkView;
