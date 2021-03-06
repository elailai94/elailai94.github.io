import ActionTypes from '../constants/ActionTypes';

const initialState = {
  activeRoute: 'home',
};

// Case reducer for selecting a route
function selectRoute(state = initialState, action) {
  const { name: activeRoute } = action.payload;

  return {
    ...state,
    activeRoute,
  };
}

// Root reducer for navigation
function NavigationReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.navigation.SELECT_ROUTE:
      return selectRoute(state, action);

    default:
      return state;
  }
}

export default NavigationReducer;
