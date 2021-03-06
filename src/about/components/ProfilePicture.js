import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class ProfilePicture extends Component {
  render() {
    const { src } = this.props;

    return (
      <Image
        alt={'Profile Picture'}
        centered
        shape={'circular'}
        size={'small'}
        src={src}
      />
    );
  }
}

ProfilePicture.propTypes = {
  src: PropTypes.string.isRequired,
};

export default ProfilePicture;
