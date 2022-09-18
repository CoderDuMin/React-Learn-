import React, { PureComponent } from 'react'

import {connect} from '../utils/connect'

import {
  subAction,
  subNumAction
} from '../store/actionCreator'

 class About extends PureComponent {
  render() {
    return (
      <div>
        <h2>ABOUT-当前计数为:{this.props.counter}</h2>
        <button onClick={() => this.props.decrement()}>-1</button>
        <button onClick={() => this.props.subNum()}>-5</button>
        <h2>轮播图</h2>
        <ul>
          {
            this.props.banners.map(item=>{
              return (<li key={item.acm}>{item.title}</li>)
            })
          }
        </ul>
        <h2>每日推荐</h2>
        <ul>
          {
            this.props.recommends.map(item=>{
              return (<li key={item.acm}>{item.title}</li>)
            })
          }
        </ul>
      </div>
    )
  }
}
const mapStates = (state) => {
  return ({...state})
}
const mapDispatch = (dispatch) => {
  return ({
    decrement(){
      dispatch(subAction())
    },
    subNum(){
      dispatch(subNumAction(6))
    }
  })
}

export default connect(mapStates,mapDispatch)(About)