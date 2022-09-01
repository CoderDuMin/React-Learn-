import React, { PureComponent } from 'react'

 class App extends PureComponent {
  render() {
    return (
      <div>
        APP - {this.props.name}
      </div>
    )
  }
}
// 1.高阶组件-返回一个类组件
function exhanceComponent(WrappedComponent){
  return class extends PureComponent{
    render(){
      return <WrappedComponent {...this.props} />
    }
  }
}

// 2.高阶组件-返回一个函数组件
function exhanceComponent2(WrappedComponent){
  return props => {
    return (
      <WrappedComponent {...props} />
    )
  }
}

const app2 =  exhanceComponent(App)
export {
  app2
}

export default exhanceComponent2(App)