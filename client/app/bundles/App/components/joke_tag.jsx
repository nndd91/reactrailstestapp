import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addDisabledTags } from '../actions/addDisabledTagsAction'
import JokeTagItem from './joke_tag_item'

class JokeTag extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (tag) {
    console.log('Clicked!', tag)
    let initialTags = this.props.disabledTags
    if (initialTags.includes(tag)) {
      console.log('Remove tag')
      initialTags =
        initialTags.filter((el) => {
          return el != tag
        })
    } else {
      initialTags.push(tag)
    }
    this.props.addDisabledTags(initialTags)
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

    return (
      Object.keys(tags).map((tag) =>{
        return (
          <JokeTagItem key={tag}
                       handleClick = {() => { this.handleClick(tag) }}
                       tagDetails={{tag: tag, numberOfTags: tags[tag], disabled: !this.props.disabledTags.includes(tag)}} />
        )
      })
    )
  }

  render () {
    return (
      <div>
        <h2>Tags</h2>
        <ul>
          {this.listTags()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    joke_list: state.jokeList,
    disabledTags: state.disabledTags
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addDisabledTags: addDisabledTags }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(JokeTag)
