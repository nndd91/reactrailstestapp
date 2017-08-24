import React, { Component } from 'react'

const JokeTagItem = (props) => {
  return (
      <li onClick={props.handleClick}>
        <label>
               {props.tagDetails.disabled ? 'Hide' : 'Show'} {props.tagDetails.tag}
        </label>
      </li>
  )
}

export default JokeTagItem
