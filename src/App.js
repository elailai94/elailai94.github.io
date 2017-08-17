import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';

import Routes from './common/constants/Routes';
import Links from './common/constants/Links';
import Settings from './common/constants/Settings';
import NavigationBar from './common/components/NavigationBar';
import Footer from './common/components/Footer';
import HomeView from './home/HomeView';
import AboutView from './about/AboutView';
import WorkView from './work/WorkView';
import TravelView from './travel/TravelView';
import NotFoundView from './notFound/NotFoundView';
import { getActiveRoute } from './common/selectors/NavigationSelectors';

class App extends Component {
  componentDidMount() {
    document.title = 'Elisha Lai';
  }

  render() {
    const color = Settings.website.COLOR;
    const { activeRoute } = this.props;

    return (
      <BrowserRouter>
        <Segment
          inverted
          vertical
          color={color}
          textAlign={'center'}
          style={styles.segment}
        >
          <NavigationBar
            activeRoute={activeRoute}
            navigationRoutes={Routes}
          />
          
          <Switch>
            <Route exact path='/' component={HomeView} />
            <Route path='/about' component={AboutView} />
            <Route path='/work' component={WorkView} />
            <Route path='/travel' component={TravelView} />
            <Route component={NotFoundView} />
          </Switch>

          <Footer color={color} socialLinks={Links} />
        </Segment>
      </BrowserRouter>
    );
  }
}

const styles = {
  segment: {
    minHeight: '100vh',
  },
};

function mapStateToProps(state) {
  return {
    activeRoute: getActiveRoute(state),
  };
}

export default connect(mapStateToProps, undefined)(App);
