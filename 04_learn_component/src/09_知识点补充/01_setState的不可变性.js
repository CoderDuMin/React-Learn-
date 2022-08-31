import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      friends:[
        {
          name:'aa',
          age:16
        },
        {
          name:'bb',
          age:16
        }
      ]
    }
  }
  render() {
    const {friends} = this.state
    return (
      <div>
        {
          friends.map(item=>{
            return (
              <h2 key={item.name}>姓名{item.name}-年龄{item.age}</h2>
            )
          })
        }
        <button onClick={e=>this.addFriends()}>朋友+1</button>
      </div>
    )
  }
  // shouldComponentUpdate((newprops,newState)=>{

  // })
  addFriends(){
    // 1.直接改变原有state方式
    //结果:页面不会刷新,在pureComponent和shouldComponentUpdate中对state进行的是浅层比较
    // this.state.friends.push({name:'ccc',age:26})
    // this.setState({
    //   friends:this.state.friends
    // })

    // 2.新创建一个state,不改变原有state
    const friends = [...this.state.friends]
    friends.push({name:'ccc',age:26})
    this.setState({
      friends:friends
    })
  }
}
