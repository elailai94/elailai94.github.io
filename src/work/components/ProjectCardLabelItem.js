import React, { Component } from 'react';
import { Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class ProjectCardLabelItem extends Component {
  render() {
    const { text } = this.props;

    return (
      <Label style={styles.label}>
        {text}
      </Label>
    );
  }
}

ProjectCardLabelItem.propTypes = {
  text: PropTypes.string.isRequired,
};

const styles = {
  label: {
    marginBottom: 4,
  },
};

export default ProjectCardLabelItem;
