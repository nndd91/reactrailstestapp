import { createStore, applyMiddleware } from 'redux';
import helloWorldReducer from '../reducers/helloWorldReducer';
import ReduxPromise from 'redux-promise'
const configureStore = (railsProps) => (
  createStore(helloWorldReducer,
              railsProps,
              applyMiddleware(ReduxPromise))
);



export default configureStore;
