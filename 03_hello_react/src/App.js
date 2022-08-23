import React,{Component} from "react"

export default class App extends Component{
  constructor(){
    super()
    this.state = {
      count:0
    }
  }
  render(){
    return (
      <div>
        <h2>当前计数为:{this.state.count}</h2>
        <button onClick={()=>this.changeCount(-1)}>-1</button>
        <button onClick={()=>this.changeCount(1)}>+1</button>
      </div>
    )
  }
  changeCount(num){
    this.setState({
      count:this.state.count + num
    })
  }
}