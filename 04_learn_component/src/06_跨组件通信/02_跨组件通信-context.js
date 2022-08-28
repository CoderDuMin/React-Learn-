import React, { Component } from 'react'

const appContext = React.createContext({
  name:'默认用户',
  age:18
})

//函数组件使用context 
function Info2(){
  return (
    <appContext.Consumer>
      {
        val =>{
          return (<div>
            <h2>姓名:{val.name}</h2>
            <h3>年龄:{val.age}</h3>
          </div>)
        }
      }
    </appContext.Consumer>
  )
}

//类组件上使用context
class Info extends Component{
  render(){
    return (
      <div>
      <h2>姓名:{this.context.name}</h2>
      <h3>年龄:{this.context.age}</h3>
    </div>
    )
  }
}

class ProfileHeader extends Component {
  render() {
    return (
      <div>
        <Info />
        <Info2 />
      </div>
    )
  }
}
ProfileHeader.contextType = appContext
Info.contextType = appContext

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      name:'yihamin',
      age:18
    }
  }
  render() {
    return (
      <div>
        <appContext.Provider value={this.state}>
        <ProfileHeader />
        </appContext.Provider>
      </div>
    )
  }
}
