import React, { Component } from 'react';
import {
  Container,
  Divider,
  Segment,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import profilePicture from './static/images/profile-picture.jpg';
import CommonSettings from '../common/constants/Settings';
import Links from './constants/Links';
import ResumeButton from './components/ResumeButton';
import ProfilePicture from './components/ProfilePicture';
import { selectRoute } from '../common/actions/NavigationActions';
import logPageView from '../common/analytics/Analytics';

class AboutView extends Component {
  componentDidMount() {
    const { selectRoute } = this.props;

    selectRoute('about');
    document.title = 'Elisha Lai - About';
    logPageView();
  }

  render() {
    const color = CommonSettings.website.COLOR;

    return (
      <Segment
        inverted
        padded
        color={color}
        style={styles.segment}
      >
      <Container text textAlign={'left'}>
        <ProfilePicture src={profilePicture} />
        <Divider hidden />
        <p style={styles.p}>
          {
            `I am a software developer from Malaysia living in Canada.
             Currently, I am in my fourth year studying Computer Science at the `
          }
          <a className={'text-link'} href={Links.universityOfWaterloo}>
            University of Waterloo
          </a>
          {
            `. I am also working as an Undergraduate Research Assistant with
             Professor `
          }
          <a className={'text-link'} href={Links.samerAlKiswany}>
            Samer Al-Kiswany
          </a>
          {
            ` to conduct experiments on the scalability of various distributed
             publish-subscribe messaging systems.`
          }
        </p>
        <p style={styles.p}>
          {
            `I have previously worked as a Website Content Assistant and a
             Web Assistant at `
          }
          <a className={'text-link'} href={Links.monSheongFoundation}>
            Mon Sheong Foundation
          </a>
          {
            `. Recently, I co-founded Terrah with a group of friends from both the `
          }
          <a className={'text-link'} href={Links.universityCollegeLondon}>
            University College London
          </a>
          { ' and the ' }
          <a className={'text-link'} href={Links.universityOfWaterloo}>
            University of Waterloo
          </a>
          {
            `. I continue to contribute to the growth of the startup as a Backend
             Engineer.`
          }
        </p>
        <p style={styles.p}>
          {
            `When not writing code, I enjoy taking photographs of interesting
             things and taking walks in the park. I also try to travel to as many
             places as possible and learn about different languages and cultures.
             Here is a `
          }
          <Link className={'text-link'} to={'/travel'}>map</Link>
          { ` of some of the places I have visited.` }
        </p>
        <p style={styles.p}>
          My main fields of interest are distributed systems, geographical
          information systems, languages and photography.
        </p>
        <p style={styles.p}>
          I am currently seeking full-time software engineering roles for Fall 2017.
        </p>
        <ResumeButton href={Links.resume} />
      </Container>
      </Segment>
    );
  }
}

const styles = {
  p: {
    hyphens: 'none',
  },
  segment: {
    minHeight: '75vh',
  },
};

function mapDispatchToProps(dispatch) {
  return {
    selectRoute: name => dispatch(selectRoute(name)),
  };
}

export default connect(undefined, mapDispatchToProps)(AboutView);
