import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addDisabledTags, toggleTag } from '../actions/tagsAction'
import JokeTagItem from './joke_tag_item'

class JokeTag extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (tag) {
    this.props.toggleTag(tag)
  }

  listTags () {
    let tags = this.props.disabledTags
    return (
      Object.keys(tags).map((tag) =>{
        let obj = {}
        obj[tag] = !tags[tag]

        return (
          <JokeTagItem key={tag}
                       handleClick = {() => { this.handleClick(obj) }}
                       tagDetails={{tag: tag, disabled: tags[tag]}} />
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
    filteredList: state.filteredList,
    disabledTags: state.disabledTags
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addDisabledTags: addDisabledTags,
                              toggleTag: toggleTag}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(JokeTag)
