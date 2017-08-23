import React, { Component } from 'react'
import { fetchJokes } from '../actions/listOfJokesAction'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateSearchParams } from '../actions/updateSearchParams'
import { updateFilterList } from '../actions/filteredListAction'

class JokeSearch extends Component {
  constructor (props) {
    super (props)
    this.props.fetchJokes()
    this.state = {searchParams: ''}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.props.updateSearchParams(event.target.value)
    this.props.updateFilterList(this.props.joke_list, this.props.searchParams)
  }

  render () {
    return (
      <div className="joke-search">
        <h2>Search: </h2>
        <input value={this.props.searchParams} onChange={this.handleChange} onBlur={() => this.props.fetchJokes(this.state.searchParams)}></input>
        <button onClick={this.props.fetchJokes}>Fetch Jokes</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    searchParams: state.searchParams,
    joke_list: state.jokeList
  }
}


function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchJokes: fetchJokes, updateSearchParams: updateSearchParams, updateFilterList: updateFilterList }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(JokeSearch)
