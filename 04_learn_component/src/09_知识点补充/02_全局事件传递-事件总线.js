import React, { PureComponent } from 'react'
import {EventEmitter} from 'events'

const eventBus = new EventEmitter()

class FileCpn extends PureComponent{
  render(){
    return (
      <div>
        Profile
        <button onClick={e=>this.changeText()}>改变</button>
      </div>
    )
  }
  changeText(){
    eventBus.emit('change','HelloWorld',123)
  }
}

class VideoCpn extends PureComponent{
  constructor(props){
    super(props)
    this.state = {
      message:'hhhh'
    }
  }
  render(){
    return (
      <h2>
        {this.state.message}
      </h2>
    )
  }
  componentDidMount(){
    eventBus.addListener('change',(msg)=>{
      this.setState({
        message:msg
      })
      console.log('监听到change事件')
    })
  }
  componentWillUnmount(){
    eventBus.removeListener('change')
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <FileCpn />
        <VideoCpn />
      </div>
    )
  }
}
