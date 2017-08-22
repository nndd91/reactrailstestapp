import React, { Component } from 'react'
import { fetchJokes } from '../actions/listOfJokesAction'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { pushJokesIntoTags } from '../actions/pushJokesIntoTags'

class JokeSearch extends Component {
  constructor (props) {
    super (props)
    this.state = {searchParams: ''}
    this.handleChange = this.handleChange.bind(this)
    this.fetchAndTag = this.fetchAndTag.bind(this)
  }

  handleChange(event) {
    this.setState({searchParams: event.target.value})

  }

  fetchAndTag (event) {
    this.props.fetchJokes(this.props.searchParams)
    .then(this.props.pushJokesIntoTags(this.props.joke_list))
  }

  render () {
    return (
      <div className="joke-search">
        <h2>Search: </h2>
        <input value={this.state.searchParams} onChange={this.handleChange} onBlur={() => this.props.fetchJokes(this.state.searchParams)}></input>
        <button onClick={this.fetchAndTag}>Fetch Jokes</button>
      </div>
    )
  }
}


function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchJokes: fetchJokes, pushJokesIntoTags: pushJokesIntoTags }, dispatch)
}

export default connect(null, mapDispatchToProps)(JokeSearch)
