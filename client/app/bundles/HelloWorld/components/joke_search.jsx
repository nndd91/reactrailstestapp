import React, { Component } from 'react'
import { fetchJokes } from '../actions/listOfJokesAction'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class JokeSearch extends Component {
  constructor (props) {
    super (props)
    this.state = {searchParams: ''}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    console.log(this.state.searchParams)
    this.setState({searchParams: event.target.value})

  }

  render () {
    return (
      <div className="joke-search">
        Search Jokes: <input value={this.state.searchParams} onChange={this.handleChange} onBlur={() => this.props.fetchJokes(this.state.searchParams)}></input>
      </div>
    )
  }
}


function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchJokes: fetchJokes }, dispatch)
}

export default connect(null, mapDispatchToProps)(JokeSearch)
