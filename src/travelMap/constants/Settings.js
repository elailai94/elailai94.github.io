import CommonSettings from '../../common/constants/Settings';

let redirectURI;
const travelMapPath = CommonSettings.website.TRAVEL_MAP_PATH;

if (process.env.NODE_ENV === 'development') {
  const developmentBaseURL = CommonSettings.website.DEVELOPMENT_BASE_URL;
  
  redirectURI = `${developmentBaseURL}${travelMapPath}`;
} else {
  const productionBaseURL = CommonSettings.website.PRODUCTION_BASE_URL;

  redirectURI = `${productionBaseURL}${travelMapPath}`;
}

const Settings = {
  foursquare: {
    HOME_BASE_URL: 'https://www.foursquare.com',
    API_BASE_URL: 'https://api.foursquare.com/v2',
    CLIENT_ID: process.env.REACT_APP_FOURSQUARE_CLIENT_ID,
    AUTHENTICATE_PATH: '/oauth2/authenticate',
    VENUE_HISTORY_PATH: '/users/84726911/venuehistory',
    REDIRECT_URI: redirectURI,
  },
  google: {
    API_KEY: process.env.REACT_APP_GOOGLE_API_KEY,
  },
};

export default Settings;
