import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import App from './components/app'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createBrowserHistory } from 'history'

import routes from './routes'

const MainApp = (props, _railsContext) => {

  const store = configureStore(props)
  const history = syncHistoryWithStore(createBrowserHistory(), store)

  return (
    <Provider store={store}>
      <Router history={history}>
        {routes}
      </Router>
    </Provider>
  )
}

export default MainApp
