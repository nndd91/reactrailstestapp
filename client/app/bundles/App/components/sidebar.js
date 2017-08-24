import React from 'react'
import JokeSearch from './joke_search'
import JokeTags from './joke_tag'
import ComparePreview from './compare_preview'

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
      </div>
  )
}

export default SideBar
