import React from 'react'
import JokeSearch from './joke_search'
import JokeTags from './joke_tag'
import ComparePreview from './compare_preview'
import { Link } from 'react-router'
const SideBar = (props) =>  {
  return (
      <div>
        <div className="row">
          <JokeSearch />
        </div>
        <div className="row">
          <JokeTags />
        </div>
        <div className="row">
          <ComparePreview />
        </div>
        <div>
        </div>
      </div>
  )
}

export default SideBar
