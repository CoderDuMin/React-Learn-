import React, { PureComponent } from 'react'

function exhanceRegionProp(WrappedComponent){
  const newComponent = class extends PureComponent{
    render(){
      return (
        <WrappedComponent {...this.props} region="中国" />
      )
    }
  }
  newComponent.displayName = 'NCPN'
  return newComponent
}

class About extends PureComponent{
  render(){
    return (
      <h2>About:{`姓名:${this.props.name} - 特长:${this.props.good} - 区域:${this.props.region}`}</h2>
    )
  }
}

class Home extends PureComponent{
  render(){
    return (
      <h2>Home:{`姓名:${this.props.name} - 特长:${this.props.good} - 区域:${this.props.region}`}</h2>
    )
  }
}

const WithRegionAbout = exhanceRegionProp(About)
const WithRegionHome = exhanceRegionProp(Home)

export default class App extends PureComponent {
  render() {
    return (
      <div>
        {/* <Home name='小王' good='跑步' region='中国' />
        <About name='橘桑' good='素食' region='日本' /> */}
        <WithRegionHome name='小王' good='跑步'  />
        <WithRegionAbout name='橘桑' good='素食'  />
      </div>
    )
  }
}
