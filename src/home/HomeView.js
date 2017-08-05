import React, { Component } from 'react';
import {
  Container,
  Segment,
} from 'semantic-ui-react';

import Adjectives from './constants/Adjectives';
import Heading from '../common/components/Heading';
import Subheading from './components/Subheading';
import {
  getRandomInteger,
  isVowel,
} from './utilities/Helper';
import logPageView from '../common/analytics/Analytics';

class HomeView extends Component {
  componentDidMount() {
    document.title = 'Elisha Lai - Home';
    logPageView();
  }

  render() {
    const minNumber = 0;
    const maxNumber = Adjectives.length - 1;
    const randomInteger = getRandomInteger(minNumber, maxNumber);
    const adjective = Adjectives[randomInteger];
    const article = isVowel(adjective[0]) ? 'an' : 'a';
    
    return (
      <Segment
        inverted
        padded
        color={'teal'}
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

export default HomeView;
