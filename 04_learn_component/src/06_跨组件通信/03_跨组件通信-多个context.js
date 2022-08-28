import React, { Component } from 'react'

const appContext = React.createContext({
  name:'默认用户',
  age:18
})
const themContext = React.createContext({
  color:'red'
})

//函数组件使用context 
function Info(){
  return (
    <appContext.Consumer>
      {
        val =>
        {
         return (
          <themContext.Consumer>
            {
              the => {
                return (
                  <div>
                    <h2 style={{color:the.color}}>姓名:{val.name}</h2>
                    <h3>年龄:{val.age}</h3>
                  </div>
                )
              }
            }
          </themContext.Consumer>
         ) 
        }
      }
    </appContext.Consumer>
  )
}


function ProfileHeader(){
  return (
    <div>
      <Info />
    </div>
  )
}

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
          <themContext.Provider value={{color:'blue'}} >
            <ProfileHeader />
          </themContext.Provider>
        </appContext.Provider>
      </div>
    )
  }
}
