import React, { Component } from 'react'
import JokeList from './joke_list'
import JokeSearch from './joke_search'
import JokeTags from './joke_tag'
export default class App extends Component {
  render () {
    return (
      <div className="container">
        <div className="row">
          <h1>App Component</h1>
          <div className="col-xs-2">
            <div className="row">
              <JokeSearch />
            </div>
            <JokeTags />
          </div>
          <div className="col-xs-10">

            <div className="row">
              <JokeList />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
