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
          <tr key={joke.id}>
            <td>
              {joke.id}
            </td>
            <td>
              {joke.joke}
            </td>
          </tr>
        )
      })
    )
  }

  render () {
    return (
      <div className="joke-list">
        <table className="table">
          <thead>
            <tr>
              <th>Joke ID</th>
              <th>Joke</th>
            </tr>
          </thead>
          <tbody>
            {this.renderList()}
          </tbody>
        </table>
        <button onClick={() => this.props.fetchJokes()}>Fetch Jokes</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    joke_list: state.jokeList
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchJokes: fetchJokes }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(JokeList)
