import Analytics from 'react-ga';

Analytics.initialize('UA-63909332-2');

function logPageView() {
  const path = window.location.pathname;
  
  Analytics.set({ page: path });
  Analytics.pageview(path);
}

export default logPageView;
