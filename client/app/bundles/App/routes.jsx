import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/navbar'
import Hello from './components/hello'
import Hi from './components/hi'
import App from './components/app'

export default (
  <div>
    <NavBar />
    <Switch>
      <Route exact path='/' component={App}/>
      <Route path='/app/hello' component={Hello}/>
      <Route path='/hi' component={Hi}/>
      <Route path='/app/hi' component={Hi}/>
      <Route path='/app' component={App}/>
    </Switch>
  </div>
)
