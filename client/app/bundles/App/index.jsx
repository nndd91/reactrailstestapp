import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import App from './components/app'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'


const MainApp = (props, _railsContext) => (
  <Provider store={configureStore(props)}>
    <Router history={syncHistoryWithStore(browserHistory, configureStore(props))}>
      <App />
    </Router>
  </Provider>
)

export default MainApp
