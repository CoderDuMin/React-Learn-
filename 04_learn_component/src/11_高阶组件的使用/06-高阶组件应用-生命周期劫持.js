import React, { PureComponent } from 'react'

class Category extends PureComponent{
  render(){
    return (
      <h2>Category</h2>
    )
  }
  UNSAFE_componentWillMount(){
    this.beginTime = Date.now()
  }
  componentDidMount(){
    this.endTime = Date.now()
    const interval = this.endTime - this.beginTime
    console.log('CateGory挂载时间'+interval)
  }
}
class Login extends PureComponent{
  render(){
    return (
      <h2>Login</h2>
    )
  }
  UNSAFE_componentWillMount(){
    this.beginTime = Date.now()
  }
  componentDidMount(){
    this.endTime = Date.now()
    const interval = this.endTime - this.beginTime
    console.log('Login挂载时间'+interval)
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Login />
        <Category />
      </div>
    )
  }
}
