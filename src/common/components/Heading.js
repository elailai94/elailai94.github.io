import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class Heading extends Component {
  render() {
    const { text } = this.props;

    return (
      <Header
        inverted
        as={'h1'}
        size={'huge'}
        style={styles.header}
      >
        {text}
      </Header>
    );
  }
}

Heading.propTypes = {
  text: PropTypes.string.isRequired,
};

const styles = {
  header: {
    marginTop: '25vh',
  },
};

export default Heading;
