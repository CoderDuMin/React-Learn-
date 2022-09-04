import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h2 style={{backgroundColor:'yellow',fontSize:'45px',color:'red'}}>我是标题</h2>
        <p style={{border:'1px solid #eee'}}>我是内容</p>
      </div>
    )
  }
}
