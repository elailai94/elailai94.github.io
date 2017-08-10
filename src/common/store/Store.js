import {
  compose,
  createStore,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import AppReducer from '../reducers/AppReducer';

let Store;

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger();

  Store = createStore(
    AppReducer,
    undefined,
    compose(applyMiddleware(thunk, logger)),
  );
} else {
  Store = createStore(
    AppReducer,
    undefined,
    compose(applyMiddleware(thunk)),
  );
}

export default Store;
