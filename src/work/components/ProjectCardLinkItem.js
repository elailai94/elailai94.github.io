import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class ProjectCardLinkItem extends Component {
  render() {
    const { name } = this.props.link;
    const { address } = this.props.link;

    return (
      <Button
       basic
       as={'a'}
       color={'blue'}
       href={address}
      >
        {name}
      </Button>
    );
  }
}

ProjectCardLinkItem.propTypes = {
  link: PropTypes.object.isRequired,
};

export default ProjectCardLinkItem;
