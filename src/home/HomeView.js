import React, { Component } from 'react';
import {
  Container,
  Segment,
} from 'semantic-ui-react';
import { connect } from 'react-redux';

import CommonSettings from '../common/constants/Settings';
import Adjectives from './constants/Adjectives';
import Heading from '../common/components/Heading';
import Subheading from './components/Subheading';
import {
  getRandomInteger,
  isVowel,
} from './utilities/Helper';
import { selectRoute } from '../common/actions/NavigationActions';
import logPageView from '../common/analytics/Analytics';

class HomeView extends Component {
  componentDidMount() {
    const { selectRoute } = this.props;

    selectRoute('home');
    document.title = 'Elisha Lai - Home';
    logPageView();
  }

  render() {
    const color = CommonSettings.website.COLOR;
    const minNumber = 0;
    const maxNumber = Adjectives.length - 1;
    const randomInteger = getRandomInteger(minNumber, maxNumber);
    const adjective = Adjectives[randomInteger];
    const article = isVowel(adjective[0]) ? 'an' : 'a';
    
    return (
      <Segment
        inverted
        padded
        color={color}
        style={styles.segment}
      >        
        <Container textAlign={'center'}>
          <Heading text={'Oh hey there! My name is Elisha Lai.'} />
          <Subheading adjective={adjective} article={article} />
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

function mapDispatchToProps(dispatch) {
  return {
    selectRoute: name => dispatch(selectRoute(name)),
  };
}

export default connect(undefined, mapDispatchToProps)(HomeView);
