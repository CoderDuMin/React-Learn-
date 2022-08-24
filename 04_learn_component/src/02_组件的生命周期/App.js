import React, { Component } from 'react'

class Cpn extends Component{
  render(){
    return <h3>我是cpn组件</h3>
  }
  componentWillUnmount(){
    console.log('我是cpn组件WillUnmount生命周期')
  }
} 

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      count:0,
      isShow:true
    }
    console.log('这里是constructor执行')
  }
  render() {
    return (
      <div>
        <h2>当前计数:{this.state.count}</h2>
        <button onClick={()=>{this.increment()}}>+1</button>
        <br/>
        <button onClick={()=>{this.showCpn()}}>切换</button>
        {this.state.isShow && <Cpn/>}
      </div>
    )
  }
  increment(){
    this.setState({
      count:this.state.count + 1
    })
  }
  showCpn(){
    this.setState({
      isShow:!this.state.isShow
    })
  }
  componentDidMount(){
    console.log('这里是mounted生命周期')
  }
  componentDidUpdate(prevProps,prevState,cac){
    console.log('这里是updated生命周期',prevProps,prevState,cac)
  }
}
