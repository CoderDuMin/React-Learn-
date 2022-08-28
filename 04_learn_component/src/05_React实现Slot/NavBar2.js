import React, { Component } from 'react'

// slot方式二:直接使用props
export default class NavBar extends Component {
  render() {
    const { leftSlot,centerSlot,rightSlot } = this.props
    return (
      <div className="navbar">
        <div className="item left-bar">
          {leftSlot}
        </div>
        <div className="item center-bar">
        {centerSlot}
        </div>
        <div className="item right-bar">
        {rightSlot}
        </div>
      </div>
    )
  }
}
