import React, { Component } from 'react'
import JokeList from './joke_list'
import JokeSearch from './joke_search'
export default class App extends Component {
  render () {
    return (
      <div>
        <h1>App Component</h1>
        <JokeSearch />
        <JokeList />
      </div>
    )
  }
}
