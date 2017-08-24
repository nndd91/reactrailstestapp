import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchJokes } from '../actions/listOfJokesAction'
import { bindActionCreators } from 'redux'
import { addToComparePool, removeFromComparePool } from '../actions/compareAction'
import { JokeListItem } from './joke_list_item'

class JokeList extends Component {
  constructor (props) {
    super(props)
    this.props.fetchJokes()
    this.activeTags = this.activeTags.bind(this)
  }

  activeTags () {
    let activeTags =
      this.props.filteredList.filter((joke) => {
        return !this.props.disabledTags[joke.cat]
      })
    return activeTags
  }

  renderList () {
    console.log('Compare Pool is: ', this.props.comparePool)
    return (
      this.activeTags().map((joke) => {
        return (
            <JokeListItem key={joke.id}
                          joke={joke}
                          inComparePool={this.props.comparePool.includes(joke)}
                          addToComparePool={() => {this.props.addToComparePool(joke)}}
                          removeFromComparePool={() => {this.props.removeFromComparePool(joke)}}/>
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

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchJokes: fetchJokes,
                              addToComparePool: addToComparePool,
                              removeFromComparePool: removeFromComparePool }, dispatch)
}

function mapStateToProps(state) {
  return {
    filteredList: state.filteredList,
    joke_list: state.jokeList,
    searchParams: state.searchParams,
    disabledTags: state.disabledTags,
    comparePool: state.comparePool
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(JokeList)
