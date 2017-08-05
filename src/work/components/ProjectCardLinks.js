import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import ProjectCardLinkItem from './ProjectCardLinkItem';

class ProjectCardLinks extends Component {
  render() {
    const { links } = this.props;

    return (
      <Button.Group fluid>
        {links.map((link) => {
          const { name } = link;

          return (
            <ProjectCardLinkItem key={name} link={link} />
          );
        })}
      </Button.Group>
    );
  }
}

ProjectCardLinks.propTypes = {
  links: PropTypes.array.isRequired,
};

export default ProjectCardLinks;
