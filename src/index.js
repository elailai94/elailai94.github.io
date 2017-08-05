import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import Store from './common/store/Store';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render((
  <Provider store={Store}>
    <App />
  </Provider>
  ),
  document.getElementById('root')
);
registerServiceWorker();
