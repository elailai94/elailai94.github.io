import ActionTypes from '../constants/ActionTypes';
import { getVenueHistory } from '../services/Foursquare';
import {
  parseVenueHistoryResponse,
  parseVenueHistoryError,
} from '../utilities/Parser';

function getLocationsVisitedRequest() {
  return {
    type: ActionTypes.travelHistory.GET_LOCATIONS_VISITED_REQUEST,
    payload: {
      status: 'in progress',
    },
  };
}

function getLocationsVisitedSuccess(response) {
  return {
    type: ActionTypes.travelHistory.GET_LOCATIONS_VISITED_SUCCESS,
    payload: {
      status: 'success',
      response,
    },
  };
}

function getLocationsVisitedFailure(error) {
  return {
    type: ActionTypes.travelHistory.GET_LOCATIONS_VISITED_FAILURE,
    payload: {
      status: 'failure',
      error,
    },
  };
}

function getLocationsVisited(accessToken) {
  return dispatch => {
    dispatch(getLocationsVisitedRequest());

    return getVenueHistory(accessToken)
      .then(response => {
        const locations = parseVenueHistoryResponse(response);
        dispatch(getLocationsVisitedSuccess(locations));
      })
      .catch(error => {
        const errorDetail = parseVenueHistoryError(error);
        dispatch(getLocationsVisitedFailure(errorDetail));
      });
  };
}

export { getLocationsVisited };
