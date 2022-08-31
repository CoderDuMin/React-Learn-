import React, { PureComponent,createRef } from 'react'

export default class App extends PureComponent {
  constructor(props){
    super(props)
    this.titleRef2 = createRef()
    this.titleRef3 = null
  }
  render() {
    return (
      <div>
        {/* 1.string方式定义 ---已被移除 */}
        <h2 ref="titleRef">你好啊</h2>
        <button onClick={e=>this.changeText()}>改变</button>
        {/* 2.使用createRef创建对象定义(官方推荐) */}
        <h2 ref={this.titleRef2}>你好啊</h2>
        <button onClick={e=>this.changeText()}>改变</button>
        {/* 3.使用函数定义 */}
        <h2 ref={arg => this.titleRef3 = arg}>你好啊</h2>
        <button onClick={e=>this.changeText()}>改变</button>
      </div>
    )
  }
  changeText(){
    // 1.string方式定义 ---已被移除
    //  console.log(this.refs.titleRef.current) 
    
    // 2.使用createRef创建对象定义(官方推荐)
    console.log(this.titleRef2.current) 
    this.titleRef2.current.innerText = '你好啊,createRef'

    // 3.使用函数定义
    console.log(this.titleRef3) 
    this.titleRef3.innerText = '你好啊,titleRef3'
  }
}
