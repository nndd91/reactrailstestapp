import React, { Component } from 'react'
import JokeSearch from './joke_search'
import JokeTags from './joke_tag'

const SideBar = (props) =>  {
  return (
      <div>
        <div className="row">
          <JokeSearch />
        </div>
        <div className="row">
          <JokeTags />
        </div>
      </div>
  )
}

export default SideBar
