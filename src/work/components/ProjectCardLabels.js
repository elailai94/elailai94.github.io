import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import ProjectCardLabelItem from './ProjectCardLabelItem';

class ProjectCardLabels extends Component {
  render() {
    const { labels } = this.props;

    return (
      <Card.Meta style={styles.meta}>
        {labels.map((label) => {
          return (
            <ProjectCardLabelItem key={label} text={label} />
          );
        })}
      </Card.Meta>
    );
  }
}

ProjectCardLabels.propTypes = {
  labels: PropTypes.array.isRequired,
};

const styles = {
  meta: {
    textAlign: 'left',
  },
};

export default ProjectCardLabels;
