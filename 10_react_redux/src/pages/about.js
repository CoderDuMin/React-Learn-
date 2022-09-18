import React, { PureComponent } from 'react'

import store from '../store/index'

import {
  subAction,
  subNumAction
} from '../store/actionCreator'

export default class About extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      counter: store.getState().counter
    }
  }
  componentDidMount(){
    this.subscribe = store.subscribe(()=>{
      this.setState({
        counter:store.getState().counter
      })
    })
  }
  render() {
    return (
      <div>
        <h2>ABOUT-当前计数为:{this.state.counter}</h2>
        <button onClick={() => this.decrement()}>-1</button>
        <button onClick={() => this.subNum()}>-5</button>
      </div>
    )
  }

  decrement(){
    store.dispatch(subAction())
  }
  subNum(){
    store.dispatch(subNumAction(5))
  }
}
