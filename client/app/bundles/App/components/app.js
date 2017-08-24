import React, { Component } from 'react'
import JokeList from './joke_list'
import SideBar from './sidebar'
import { Route } from 'react-router'


export default class App extends Component {
  render () {
    return (
      <div className="container">
        <div className="row">
          <h1>App Component</h1>
          <div className="col-xs-2">
            <SideBar />
          </div>

          <div className="col-xs-10">
            <div className="row">
              <Route path="/" component={JokeList} />
              <Route path="/test" component={SideBar} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
