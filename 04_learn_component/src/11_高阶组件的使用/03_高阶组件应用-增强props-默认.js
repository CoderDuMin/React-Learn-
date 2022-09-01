import React, { PureComponent,createContext } from 'react'

const userContext = createContext({
  name:'coder',
  good:'吃饭',
  region:'中国'
})


class About extends PureComponent{
  render(){
    return (
      <userContext.Consumer>
      {
        user => {
          return (
            <h2>About:{`姓名:${user.name} - 特长:${user.good} - 区域:${user.region}`}</h2>
          )
        }
      }
    </userContext.Consumer>
    )
  }
}

class Home extends PureComponent{
  render(){
    return (
      <userContext.Consumer>
        {
          user => {
            return (
              <h2>Home:{`姓名:${user.name} - 特长:${user.good} - 区域:${user.region}`}</h2>
            )
          }
        }
      </userContext.Consumer>
      
    )
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <userContext.Provider value={{name:'赤峰市',good:'跳高',region:'福建'}}>
          <Home name='小王' good='跑步'  />
          <About name='橘桑' good='素食'  />
        </userContext.Provider>
      </div>
    )
  }
}
