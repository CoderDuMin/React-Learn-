import React, { Component } from 'react'

// slot方式一:使用props.children
export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="item left-bar">
          {this.props.children[0]}
        </div>
        <div className="item center-bar">
        {this.props.children[1]}
        </div>
        <div className="item right-bar">
        {this.props.children[2]}
        </div>
      </div>
    )
  }
}
