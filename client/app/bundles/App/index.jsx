import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'
import rootReducer from './reducers/index';

import App from './components/app'

const configureStore = (railsProps) => (
  createStore(rootReducer,
              railsProps,
              applyMiddleware(ReduxPromise))
);


const MainApp = (props, _railsContext) => (
  <Provider store={configureStore(props)}>
    <App />
  </Provider>
)

export default MainApp
