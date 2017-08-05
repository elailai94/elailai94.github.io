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
import NavigationBar from './common/components/NavigationBar';
import Footer from './common/components/Footer';
import HomeView from './home/HomeView';
import AboutView from './about/AboutView';
import WorkView from './work/WorkView';
import NotFoundView from './notFound/NotFoundView';
import { selectRoute } from './common/actions/NavigationActions';

class App extends Component {
  componentDidMount() {
    document.title = 'Elisha Lai';
/*
    fetch('https://api.foursquare.com/v2/users/self/venuehistory?oauth_token=240DUWDOGAYYAK5TA13DKOOKQ2I1CTPZLQS0RY4XYLDGUN13&v=20170531')
    .then((response) => response.json())
    .then((json) => console.log(json.response.venues.items));
*/
  }

  render() {
    const { activeRoute } = this.props;
    const { selectRoute } = this.props;

    return (
      <BrowserRouter>
        <Segment
          inverted
          vertical
          color={'teal'}
          textAlign={'center'}
          style={styles.segment}
        >
          <NavigationBar
            activeRoute={activeRoute}
            navigationRoutes={Routes}
            onClick={(name) => selectRoute(name)}
          />
          
          <Switch>
            <Route exact path='/' component={HomeView} />
            <Route path='/about' component={AboutView} />
            <Route path='/work' component={WorkView} />
            <Route component={NotFoundView} />
          </Switch>

          <Footer color={'teal'} socialLinks={Links} />
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
    activeRoute: state.navigation.activeRoute,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectRoute: (name) => dispatch(selectRoute(name)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
