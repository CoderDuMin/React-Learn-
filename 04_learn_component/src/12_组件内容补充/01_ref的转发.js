import React, { PureComponent,forwardRef, createRef } from 'react'

function Home1(props){
  return (
    <h2>Home1</h2>
  )
}
const Profile = forwardRef((props,ref)=>{
  return (
    <h2 ref={ref}>Profile</h2>
  )
})

export default class App extends PureComponent {
  constructor(props){
    super(props)
    this.titleRef = createRef()
    this.home1Ref = createRef()
    this.ProfileRef = createRef()
  }
  render() {
    return (
      <div>
        <h2 ref={this.titleRef}>title</h2>
        <Home1 ref={this.home1Ref}></Home1>
        <Profile ref={this.ProfileRef}/>
        <button onClick={e=>this.getRefs()}>获取ref</button>
      </div>
    )
  }
  getRefs(){
    console.log(this.titleRef.current)
    console.log(this.home1Ref.current)
    console.log(this.ProfileRef.current)
  }
}
