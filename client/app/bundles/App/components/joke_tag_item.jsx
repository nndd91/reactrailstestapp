import React, { Component } from 'react'

const JokeTagItem = (props) => {
  console.log(props)
  return (
      <li onClick={props.handleClick}>
        <label>
        <input type="checkbox"
               checked={!props.tagDetails.disabled}/> {props.tagDetails.tag}
        </label>
      </li>
  )
}

export default JokeTagItem
