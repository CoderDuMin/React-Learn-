import React, { PureComponent,createContext } from 'react'

const userContext = createContext({
  good:'吃饭',
  region:'中国'
})

function exhanceUserContext(WrappedComponent){
  return props => {
    return (
      <userContext.Consumer>
        {
          user => {
            return <WrappedComponent {...props} {...user} />
          }
        }
      </userContext.Consumer>
    )
  }
}


class About extends PureComponent{
  render(){
    return <h2>About:{`姓名:${this.props.name} - 特长:${this.props.good} - 区域:${this.props.region}`}</h2>
  }
}

class Home extends PureComponent{
  render(){
    return <h2>Home:{`姓名:${this.props.name} - 特长:${this.props.good} - 区域:${this.props.region}`}</h2>
  }
}

const UserHome = exhanceUserContext(Home)
const UserAbout = exhanceUserContext(About)

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <userContext.Provider value={{good:'跳高',region:'福建'}}>
          <UserHome name='xiaow' />
          <UserAbout name='橘桑'  />
        </userContext.Provider>
      </div>
    )
  }
}
