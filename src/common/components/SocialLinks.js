import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import SocialLinkItem from './SocialLinkItem';

class SocialLinks extends Component {
  render() {
    const { links } = this.props;
    const { only } = this.props;
    const { textAlign } = this.props;

    return (
      <Grid.Column only={only} textAlign={textAlign}>
        {links.map(link => {
          const { name } = link;

          return (
            <SocialLinkItem key={name} link={link} />
          );
        })}
      </Grid.Column>
    );
  }
}

SocialLinks.propTypes = {
  links: PropTypes.array.isRequired,
  only: PropTypes.string.isRequired,
  textAlign: PropTypes.string.isRequired,
};

export default SocialLinks;
