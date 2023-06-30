import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux'
// async task
import thunk from 'redux-thunk'
import rootReducer from '../reducers';
import logger from 'redux-logger';

const middleware = [thunk, logger]
export const store = createStore(
  rootReducer,
  // for async 
  compose(applyMiddleware(...middleware))
)
