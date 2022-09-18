import React, { PureComponent } from 'react'

import store from '../store/index'

import {
  addAction,
  addNumAction
} from '../store/actionCreator'

export default class home1 extends PureComponent {
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
        <h2>当前计数为:{this.state.counter}</h2>
        <button onClick={() => this.increment()}>+1</button>
        <button onClick={() => this.addNum()}>+5</button>
      </div>
    )
  }

  increment(){
    store.dispatch(addAction())
  }
  addNum(){
    store.dispatch(addNumAction(5))
  }
}
