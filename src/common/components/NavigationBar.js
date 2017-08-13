import React, { Component } from 'react';
import {
  Container,
  Menu,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

import NavigationRoutes from './NavigationRoutes';

class NavigationBar extends Component {
  render() {
    const { activeRoute } = this.props;
    const { navigationRoutes } = this.props;
    const { onClick } = this.props;

    return (
      <Container>
        <Menu
          inverted
          pointing
          secondary
          defaultActiveIndex={0}
          size={'large'}
          stackable
          style={styles.menu}
        >
          <Menu.Item header>Elisha Lai</Menu.Item>
          <NavigationRoutes
            active={activeRoute}
            onClick={(name) => onClick(name)}
            routes={navigationRoutes}
          />
        </Menu>
      </Container>
    );
  }
}

NavigationBar.propTypes = {
  activeRoute: PropTypes.string.isRequired,
  navigationRoutes: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

const styles = {
  menu: {
    borderWidth: 0,
  },
}

export default NavigationBar;
