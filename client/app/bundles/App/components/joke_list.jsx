import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchJokes } from '../actions/listOfJokesAction'
import { bindActionCreators } from 'redux'


class JokeList extends Component {
  constructor (props) {
    super(props)
  }
  renderList () {
    return (
      this.props.joke_list.map((joke) => {
        return (
          <div className="col-xs-12 col-s-6 col-md-3" key={joke.id}>
            <div className="panel">
              <div className="panel-heading">
                {joke.id}
              </div>
              <div className="panel-body">
                {joke.joke}
              </div>
            </div>
          </div>
        )
      })
    )
  }

  render () {
    return (
      <div className="joke-list">
        <div className="row">
          {this.renderList()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    joke_list: state.jokeList,
    searchParams: state.searchParams
  }
}



export default connect(mapStateToProps)(JokeList)
