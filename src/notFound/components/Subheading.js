import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Subheading extends Component {
  render() {
    return (
      <Header
        inverted
        as={'h2'}
        size={'large'}
        style={styles.header}
      >
        {"Let's get you back "}
        <Link className={'text-link'} to={'/'}>home</Link>
        {'.'}
      </Header>
    );
  }
}

const styles = {
  header: {
    marginBottom: '25vh',
  },
};

export default Subheading;
