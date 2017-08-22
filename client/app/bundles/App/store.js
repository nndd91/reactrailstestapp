import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'
import rootReducer from './reducers/rootReducer';
import logger from 'redux-logger'

const configureStore = (railsProps) => (
  createStore(rootReducer,
              railsProps,
              applyMiddleware(ReduxPromise, logger))
);

export default configureStore
