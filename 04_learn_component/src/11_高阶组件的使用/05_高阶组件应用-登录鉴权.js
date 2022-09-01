import React, { PureComponent } from 'react'

function withAuthCpn(WrappedComponent){
  return (props)=>{
    if(props.isLogin){
      return <Category {...props} />
    }else{
      return <Login />
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

const AuthCategory = withAuthCpn(Category)
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <AuthCategory isLogin={true} />
      </div>
    )
  }
}
