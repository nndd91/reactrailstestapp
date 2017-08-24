import React from 'react'

let divStyle = {
  backgroundColor: 'rgb(213, 201, 151)'
}

export const JokeListItem = (props) => {
  let button = null
  if (props.inComparePool) {
    button = <button onClick={props.removeFromComparePool}>Remove</button>
  } else {
    button = <button onClick={props.addToComparePool}>Add</button>
  }
  return (
    <div className="col-xs-12 col-s-6 col-md-3">
      <div className="panel" style={divStyle}>
        <div className="panel-heading">
          {props.joke.id}
          <p>Color: {props.joke.color}</p>
          <p>Category: {props.joke.cat}</p>
        </div>
        <div className="panel-body" style={{ height: '150px'}}>
          Joke: {props.joke.joke}
        </div>
        <div className="panel-footer">
          {button}
        </div>
      </div>
    </div>
  )
}
