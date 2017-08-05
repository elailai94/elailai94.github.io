import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class ResumeButton extends Component {
  render() {
    const { href } = this.props;

    return (
      <a href={href}>
        <Button primary style={styles.button}>
          Résumé
        </Button>
      </a>
    );
  }
}

Button.propTypes = {
  href: PropTypes.string,
};

const styles = {
  button: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

export default ResumeButton;
