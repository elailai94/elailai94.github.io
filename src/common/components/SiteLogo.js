import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class SiteLogo extends Component {
  render() {
    const { src } = this.props;

    return (
      <Image
        alt={'Site Logo'}
        centered
        size={'mini'}
        src={src}
      />
    );
  }
}

SiteLogo.propTypes = {
  src: PropTypes.string.isRequired,
};

export default SiteLogo;
