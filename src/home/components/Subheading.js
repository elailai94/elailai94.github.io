import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class Subheading extends Component {
  render() {
    const { article } = this.props;
    const { adjective } = this.props;

    return (
      <Header
        inverted
        as={'h2'}
        size={'large'}
        style={styles.header}
      >
        I am {article} {adjective} software developer.
      </Header>
    );
  }
}

Subheading.propTypes = {
  adjective: PropTypes.string.isRequired,
  article: PropTypes.string.isRequired,
};

const styles = {
  header: {
    marginBottom: '25vh',
  },
};

export default Subheading;
