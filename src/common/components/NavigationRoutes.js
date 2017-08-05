import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import NavigationRouteItem from './NavigationRouteItem';

class NavigationRoutes extends Component {
  render() {
    const { active } = this.props;
    const { onClick } = this.props;
    const { routes } = this.props;

    return (
      <Menu.Menu position={'right'}>
        {routes.map((route) => {
          const { name } = route;
          
          return (
            <NavigationRouteItem
              active={active === name}
              key={name}
              onClick={(name) => onClick(name)}
              route={route}
            />
          );
        })}
      </Menu.Menu>
    );
  }
}

NavigationRoutes.propTypes = {
  active: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  routes: PropTypes.array.isRequired,
};

export default NavigationRoutes;
