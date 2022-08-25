import React, { Component } from 'react'

//类组件
class Header extends Component {
  render(){
    return <h2>Header组件</h2>
  }
}

class Main extends Component{
  render(){
    return (
      <div>
        <h2>我是Main内容</h2>
        <ProductList />
      </div>
    )
  }
}
class Footer extends Component{
  render(){
    return <h2>Footer</h2>
  }
}
//函数组件
function ProductList(){
  return (
    <ul>
      <li>商品1</li>
      <li>商品2</li>
      <li>商品3</li>
      <li>商品4</li>
    </ul>
  )
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}
