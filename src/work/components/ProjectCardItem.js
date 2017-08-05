import React, { Component } from 'react';
import {
  Card,
  Image,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

import ProjectCardHeading from './ProjectCardHeading';
import ProjectCardLabels from './ProjectCardLabels';
import ProjectCardDescription from './ProjectCardDescription';
import ProjectCardLinks from './ProjectCardLinks';

class ProjectCardItem extends Component {
  render() {
    const { name } = this.props.project;
    const { technologies } = this.props.project;
    const { description } = this.props.project;
    const { links } = this.props.project;
    const { src } = this.props.project.image;
    const { alt } = this.props.project.image;

    return (
      <Card raised>
        <Image src={src} alt={alt} />
        <Card.Content>
          <ProjectCardHeading text={name} />
          <ProjectCardLabels labels={technologies} />
          <ProjectCardDescription text={description} />
        </Card.Content>
        <Card.Content extra>
          <ProjectCardLinks links={links} />
        </Card.Content>
      </Card>
    );
  }
}

ProjectCardItem.propTypes = {
  project: PropTypes.object.isRequired,
}

export default ProjectCardItem;
