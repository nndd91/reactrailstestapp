import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchJokes } from '../actions/listOfJokesAction'
import { bindActionCreators } from 'redux'

let divStyle = {
  backgroundColor: 'rgb(213, 201, 151)'
}

class JokeList extends Component {
  constructor (props) {
    super(props)
    this.filteredList = this.filteredList.bind(this)
  }

  filteredList() {
    let filteredList =
      this.props.joke_list.filter((joke) => {
        console.log('Joke is: ', joke.joke)
        console.log(joke.joke.search(this.props.searchParams))
        return joke.joke.search(this.props.searchParams) >= 0
      })
    console.log('filtered list is: ',filteredList)
    return filteredList
  }

  renderList () {
    return (
      this.filteredList().map((joke) => {
        return (
          <div className="col-xs-12 col-s-6 col-md-3" key={joke.id}>
            <div className="panel" style={divStyle}>
              <div className="panel-heading">
                {joke.id}
              </div>
              <div className="panel-body">
                <ul>
                  <li>Category: {joke.cat}</li>
                  <li>Color: {joke.color}</li>
                  <li>Joke: {joke.joke}</li>
                </ul>
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
