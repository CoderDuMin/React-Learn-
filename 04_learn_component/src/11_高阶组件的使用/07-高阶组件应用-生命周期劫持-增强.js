import React, { PureComponent } from 'react'

function withRenderTime(WrappedComponent){
  return class extends PureComponent{
    UNSAFE_componentWillMount(){
      this.beginTime = Date.now()
    }
    componentDidMount(){
      this.endTime = Date.now()
      const interval = this.endTime - this.beginTime
      console.log(`${WrappedComponent.name}挂载时间`+interval)
    }
    render(){
      return <WrappedComponent {...this.props} />
    }
  }
}

class Category extends PureComponent{
  render(){
    return (
      <h2>Category</h2>
    )
  }
}
class Login extends PureComponent{
  render(){
    return (
      <h2>Login</h2>
    )
  }
}

const WithTimeLogin = withRenderTime(Login)
const WithTimeCategory = withRenderTime(Category)

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <WithTimeLogin />
        <WithTimeCategory />
      </div>
    )
  }
}
