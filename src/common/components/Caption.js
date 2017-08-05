import React, { Component } from 'react';
import {
  Grid,
  Icon,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

class Caption extends Component {
  render() {
    const { only } = this.props;
    const { textAlign } = this.props;

    return (
      <Grid.Column only={only} textAlign={textAlign}>
        <p>
          { 'Made with ' }
          <Icon inverted name={'heart'} />
          { 'in Waterloo.' }
        </p>
      </Grid.Column>
    );
  }
}

Caption.propTypes = {
  only: PropTypes.string.isRequired,
  textAlign: PropTypes.string.isRequired,
};

export default Caption;
