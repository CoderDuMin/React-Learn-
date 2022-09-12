import React, { PureComponent } from 'react'
import { Button } from 'antd'
import './App.less'

import classnames from 'classnames'
export default class App extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      isActive:true
    }
  }
  render() {
    const { isActive } = this.state
    return (
      <div>
        <h2 className={classnames('aa','bb','cc')}>你好啊</h2>
        <h2 className={classnames(['aaa','bbb',isActive?'active':''])}>真的好吗</h2>
        <button onClick={e=> this.changeActive()}>更改选中状态</button>
        <>
          <Button type="primary">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <br />
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
        </>
      </div>
    )
  }

  changeActive(){
    this.setState({
      isActive:!this.state.isActive
    })
  }
}
