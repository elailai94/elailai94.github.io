import { combineReducers } from 'redux';

import NavigationReducer from './NavigationReducer';

// Root reducer for app
const AppReducer = combineReducers({
  navigation: NavigationReducer,
});

export default AppReducer;
