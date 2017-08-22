import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'
import rootReducer from './reducers/rootReducer';

const configureStore = (railsProps) => (
  createStore(rootReducer,
              railsProps,
              applyMiddleware(ReduxPromise))
);

export default configureStore
