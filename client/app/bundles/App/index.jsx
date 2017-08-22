import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import App from './components/app'

const MainApp = (props, _railsContext) => (
  <Provider store={configureStore(props)}>
    <App />
  </Provider>
)

export default MainApp
