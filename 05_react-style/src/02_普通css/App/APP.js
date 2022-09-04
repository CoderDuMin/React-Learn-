import React, { PureComponent } from 'react'
import Home from '../Home'

import './index.css'

// 使用普通css方式
// 容易出现样式污染问题

export default class APP extends PureComponent {
  render() {
    return (
      <div>
        <h2>App的标题</h2>
        <hr/>
        <Home />
      </div>
    )
  }
}
