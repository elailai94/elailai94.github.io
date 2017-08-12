import request from 'request-promise-native';

import Settings from '../constants/Settings';
import { getCurrentDate } from '../utilities/Helper';

// Get the options for a request
function getOptions(baseURL, path, queryStrings) {
  return {
    uri: `${baseURL}${path}`,
    qs: queryStrings,
    gzip: true,
    json: true,
  };
}

// Call the endpoint
async function callEndpoint(baseURL, path, queryStrings) {
  const options = getOptions(baseURL, path, queryStrings);
  const response = await request(options);
  
  return response;
}

/*
 * Return a list of all venues visited by the specified user, along
 * with how many visits and when they were last there
 */ 
async function getVenueHistory(accessToken) {
  const baseURL = Settings.foursquare.BASE_URL;
  const path = Settings.foursquare.VENUE_HISTORY_PATH;
  const currentDate = getCurrentDate();
  const queryStrings = {
    oauth_token: accessToken,
    v: currentDate,
  };
  
  const response = await callEndpoint(baseURL, path, queryStrings);
  return response;
}

export { getVenueHistory };
