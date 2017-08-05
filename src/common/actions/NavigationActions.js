import ActionTypes from '../constants/ActionTypes';

function selectRoute(name) {
  return {
    type: ActionTypes.navigation.SELECT_ROUTE,
    payload: {
      name,
    },
  };
}

export { selectRoute };
