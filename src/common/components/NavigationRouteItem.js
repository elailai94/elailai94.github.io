import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class NavigationRouteItem extends Component {
  render() {
    const { active } = this.props;
    const { address } = this.props.route;
    const { name } = this.props.route;
    const { onClick } = this.props;

    return (
      <Menu.Item
        active={active}
        as={Link}
        name={name}
        onClick={() => onClick(name)}
        to={address}
      />
    );
  }
}

NavigationRouteItem.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  route: PropTypes.object.isRequired,
};

export default NavigationRouteItem;
