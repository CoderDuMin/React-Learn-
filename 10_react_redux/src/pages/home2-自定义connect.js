import React, { PureComponent } from 'react'

import { connect } from '../utils/connect'
import {
  addAction,
  addNumAction
} from '../store/actionCreator'

 class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>当前计数为:{this.props.counter}</h2>
        <button onClick={() => this.props.increment()}>+1</button>
        <button onClick={() => this.props.addNum()}>+5</button>
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
    }
  }
}

export default connect(mapState,mapDispatch)(Home)