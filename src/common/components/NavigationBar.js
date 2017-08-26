import React, { Component } from 'react';
import {
  Container,
  Menu,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

import NavigationRoutes from './NavigationRoutes';
import SiteLogo from './SiteLogo';

class NavigationBar extends Component {
  render() {
    const { activeRoute } = this.props;
    const { navigationRoutes } = this.props;
    const { siteLogo } = this.props;

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
          <Menu.Item style={styles.menuItem}>
            <SiteLogo src={siteLogo} />
          </Menu.Item>
          <NavigationRoutes
            active={activeRoute}
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
  siteLogo: PropTypes.string.isRequired,
};

const styles = {
  menu: {
    borderWidth: 0,
  },
  menuItem: {
    padding: 0,
  },
};

export default NavigationBar;
