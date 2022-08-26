import React, { Component } from 'react'
import TabControl from './TabControl'

export default class APP extends Component {
  constructor(props){
    super()
    this.titles = ['流行','热门','新品']
    this.state = {
      currentTitle:'流行'
    }
  }
  render() {
    const {currentTitle} = this.state
    return (
      <div>
        <TabControl titles={this.titles} itemClick={index=>this.itemClick(index)} />
        <h2>{currentTitle}</h2>
      </div>
    )
  }
  itemClick(index){
    this.setState({
      currentTitle:this.titles[index]
    })
  }
}
