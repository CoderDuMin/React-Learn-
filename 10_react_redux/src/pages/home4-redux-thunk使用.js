import React, { PureComponent } from 'react'

import {connect} from 'react-redux'
import {
  addAction,
  addNumAction,
  getMultidata
} from '../store/actionCreator'

 class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>当前计数为:{this.props.counter}</h2>
        <button onClick={() => this.props.increment()}>+1</button>
        <button onClick={() => this.props.addNum()}>+5</button>
        <button onClick={() => this.props.getMultData()}>获取数据</button>
      </div>
    )
  }
}
const mapState = (state) => {
  return {
    counter:state.counter
  }
}

const mapDispatch = (dispatch) => {
  return {
    increment(){
      dispatch(addAction())
    },
    addNum(){
      dispatch(addNumAction(5))
    },
    getMultData(){
      dispatch(getMultidata)
    }
  }
}

export default connect(mapState,mapDispatch)(Home)