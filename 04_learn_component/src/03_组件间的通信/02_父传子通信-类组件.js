import React, { Component } from 'react'

class ChildCpn extends Component{
  //可省略
  // constructor(props){
  //   super()
  //   this.props = props
  // }
  render(){
    return (
      <h2>{this.props.name+this.props.age}</h2>
    )
  }
}
export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name={'aaa'} age={18} />
      </div>
    )
  }
}
