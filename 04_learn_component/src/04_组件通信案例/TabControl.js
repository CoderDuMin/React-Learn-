import React, { Component } from 'react'
import './index.css'

export default class TabControl extends Component {
  constructor(props){
    super()
    this.state = {
      currentIndex:0,
    }
  }
  render() {
    const {titles} = this.props
    const {currentIndex} = this.state
    return (
      <div className='tab-bar'>
        {
          titles.map((item,index)=>{
            return (
              <div className={'item'+(currentIndex === index ? ' active' :'')}
                   key={item}
                   onClick={e=>this.tapItem(index)}>
                {item}
              </div>
            )
          })
        }
      </div>
    )
  }
  tapItem(index){
    this.setState({
      currentIndex:index
    })
    this.props.itemClick(index)
  }
}
