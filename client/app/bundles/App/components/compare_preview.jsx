import React, { Component } from 'react'
import { connect } from 'react-redux'

class ComparePreview extends Component {
  renderList () {
    return (
      this.props.comparePool.map((joke) => {
        return (
          <div className="panel" key={joke.id}>
            <div className="panel-body">
              <small>
                {joke.joke}
              </small>
            </div>
          </div>
        )
      })
    )
  }

  render () {
    return (
    <div className="col-xs-12">
      <h2>Compare Preview</h2>
      {console.log(this.props.comparePool)}
      {this.renderList()}
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    comparePool: state.comparePool
  }
}

export default connect(mapStateToProps)(ComparePreview)
