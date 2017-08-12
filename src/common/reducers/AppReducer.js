import { combineReducers } from 'redux';

import NavigationReducer from './NavigationReducer';
import TravelHistoryReducer from '../../travel/reducers/TravelHistoryReducer';

// Root reducer for app
const AppReducer = combineReducers({
  navigation: NavigationReducer,
  travelHistory: TravelHistoryReducer,
});

export default AppReducer;
