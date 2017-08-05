import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class ProjectCardDescription extends Component {
  render() {
    const { text } = this.props;

    return (
      <Card.Description style={styles.description}>
        {text}
      </Card.Description>
    );
  }
}

ProjectCardDescription.propTypes = {
  text: PropTypes.string.isRequired,
};

const styles = {
  description: {
    textAlign: 'left',
  },
};

export default ProjectCardDescription;
