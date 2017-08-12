const Settings = {
  foursquare: {
    BASE_URL: 'https://api.foursquare.com/v2',
    ACCESS_TOKEN: process.env.REACT_APP_FOURSQUARE_ACCESS_TOKEN,
    VENUE_HISTORY_PATH: '/users/84726911/venuehistory',
  },
  google: {
    API_KEY: process.env.REACT_APP_GOOGLE_API_KEY,
  },
};

export default Settings;
