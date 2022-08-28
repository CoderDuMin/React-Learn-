import React, { Component } from 'react'


//方式一:使用props逐层传递
function Info(props){
  return (
    <div>
      <h2>姓名:{props.name}</h2>
      <h3>年龄:{props.age}</h3>
    </div>
  )
}

function ProfileHeader(props) {
  return (
    <div>
      <Info name={props.name} age={props.age} />
    </div>
  )
}


export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      name:'coder',
      age:18
    }
  }
  render() {
    return (
      <div>
        <ProfileHeader name={this.state.name} age={this.state.age} />
      </div>
    )
  }
}
