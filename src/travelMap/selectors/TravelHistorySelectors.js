// Selector for getting the status
function getStatus(state) {
  return state.travelHistory.status;
}

// Selector for getting the response
function getResponse(state) {
  return state.travelHistory.response;
}

// Selector for getting the error
function getError(state) {
  return state.travelHistory.error;
}

export {
  getStatus,
  getResponse,
  getError,
};
