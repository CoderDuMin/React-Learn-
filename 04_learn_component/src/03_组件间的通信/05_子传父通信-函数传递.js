import React, { Component } from 'react'

class ChildCpn extends Component{
  render(){
    const {addClick} = this.props
    return (
      <div>
        <button onClick={addClick}>+1</button>
      </div>
    )
  }
}

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      count:0
    }
  }
  render() {
    const { count } =this.state
    return (
      <div>
        <h2>当前计数:{count}</h2>
        <button onClick={e=>this.increment()}>+1</button>
        <ChildCpn addClick={()=>this.increment()} />
      </div>
    )
  }
  increment(){
    this.setState({
      count:this.state.count + 1
    })
  }
}
