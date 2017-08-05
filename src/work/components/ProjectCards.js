import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import ProjectCardItem from './ProjectCardItem';

class ProjectCards extends Component {
  render() {
    const { projects } = this.props;

    return (
      <Card.Group doubling stackable itemsPerRow={3}>
       {projects.map((project) => {
          const { name } = project;
          
          return (
            <ProjectCardItem key={name} project={project} />
          );
        })}
      </Card.Group>
    );
  }
}

ProjectCards.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default ProjectCards;