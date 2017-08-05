import React, { Component } from 'react';
import {
  Container,
  Grid,
  Segment,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

import SocialLinks from './SocialLinks';
import Caption from './Caption';

class Footer extends Component {
  render() {
    const { color } = this.props;
    const { socialLinks } = this.props;

    return (
      <Segment
        inverted
        padded
        color={color}
        style={styles.segment}
      >
        <Container>
          <Grid
            stackable
            columns={'equal'}
            verticalAlign={'middle'}
          >
            {/* Mobile version of the social links component */}
            <SocialLinks
              links={socialLinks}
              only={'mobile'}
              textAlign={'center'}
            />

            {/* Desktop & tablet version of the social links component */}
            <SocialLinks
              links={socialLinks}
              only={'tablet computer'}
              textAlign={'left'}
            />

            {/* Mobile version of the caption component */}
            <Caption only={'mobile'} textAlign={'center'} />

            {/* Desktop & tablet version of the caption component */}
            <Caption only={'tablet computer'} textAlign={'right'} />
          </Grid>
        </Container>
      </Segment>
    );
  }
}

Footer.propTypes = {
  color: PropTypes.string.isRequired,
  socialLinks: PropTypes.array.isRequired,
};

const styles = {
  segment: {
//    bottom: 0,
//    position: 'absolute',
    width: '100%',
  },
}

export default Footer;
