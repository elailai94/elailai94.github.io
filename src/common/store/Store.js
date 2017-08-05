import {
    compose,
    createStore,
    applyMiddleware,
} from 'redux';
import { createLogger } from 'redux-logger';

import AppReducer from '../reducers/AppReducer';

let Store;

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger();

  Store = createStore(
    AppReducer,
    undefined,
    compose(applyMiddleware(logger)),
  );
} else {
  Store = createStore(AppReducer);
}

export default Store;
