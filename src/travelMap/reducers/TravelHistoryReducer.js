import ActionTypes from '../constants/ActionTypes';

const initialState = {
  status: 'success',
  response: [],
  error: '',
};

// Case reducer for handling request in getting locations visited
function getLocationsVisitedRequest(state = initialState, action) {
  const { status } = action.payload;

  return {
    ...state,
    status,
  };
}

// Case reducer for handling success in getting locations visited
function getLocationsVisitedSuccess(state = initialState, action) {
  const { status } = action.payload;
  const { response } = action.payload;

  return {
    ...state,
    status,
    response,
  };
}

// Case reducer for handling failure in getting locations visited
function getLocationsVisitedFailure(state = initialState, action) {
  const { status } = action.payload;
  const { error } = action.payload;
  
  return {
    ...state,
    status,
    error,
  };
}

// Root reducer for travel history
function TravelHistoryReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.travelHistory.GET_LOCATIONS_VISITED_REQUEST:
      return getLocationsVisitedRequest(state, action);

    case ActionTypes.travelHistory.GET_LOCATIONS_VISITED_SUCCESS:
      return getLocationsVisitedSuccess(state, action);

    case ActionTypes.travelHistory.GET_LOCATIONS_VISITED_FAILURE:
      return getLocationsVisitedFailure(state, action);

    default:
      return state;
  }
}

export default TravelHistoryReducer;
