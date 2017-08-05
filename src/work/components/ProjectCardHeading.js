import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class ProjectCardHeading extends Component {
  render() {
    const { text } = this.props;

    return (
      <Card.Header style={styles.header}>
        {text}
      </Card.Header>
    );
  }
}

ProjectCardHeading.propTypes = {
  text: PropTypes.string.isRequired,
};

const styles = {
  header: {
    marginBottom: 8,
    textAlign: 'left',
  },
};

export default ProjectCardHeading;
