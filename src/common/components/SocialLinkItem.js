import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class SocialLinkItem extends Component {
  render() {
    const { name } = this.props.link;
    const { address } = this.props.link;

    return (
      <a href={address}>
        <Icon
          inverted
          link
          name={name}
          size={'large'}
        />
      </a>
    );
  }
}

SocialLinkItem.propTypes = {
  link: PropTypes.object.isRequired,
};

export default SocialLinkItem;
