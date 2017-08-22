import React, { Component } from 'react'
import { connect } from 'react-redux'

class JokeTag extends Component {
  constructor(props) {
    super(props)
  }

  listTags () {
    let tags = {}
    this.props.joke_list.forEach((joke) => {
      if (joke.cat in tags) {
        tags[joke.cat] += 1
      } else {
        tags[joke.cat] = 1
      }
    })
    console.log('Tags is: ',tags)
    return (
      Object.keys(tags).map((tag) =>{
        console.log(tag, tags[tag])
        return (
          <li key={tag}>
            {tag} ({tags[tag]})
          </li>
        )
      })
    )
  }

  render () {
    return (
      <div>
        <h2>Tag</h2>
        <ul>
          {this.listTags()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    joke_list: state.jokeList
  }
}

export default connect(mapStateToProps)(JokeTag)
