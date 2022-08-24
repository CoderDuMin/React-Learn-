import React, { Component } from 'react'

export default class App extends Component {
  render() {
    // 1.返回React对象(jsx)
    // return (
    //   <div>
        
    //   </div>
    // )

    //2.返回数组
    return [
      <div>你好啊</div>,
      <h2>我是数组的第二个h2元素</h2>
    ]

    //3.string等
    // return '我是文本'
  }
}
