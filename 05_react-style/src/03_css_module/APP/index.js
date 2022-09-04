import React, { PureComponent } from 'react'
import Home from '../Home'

import appStyle from './index.module.css'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <div className={appStyle.title}>App的标题</div>
        <p>App的内荣</p>
        <Home />
      </div>
    )
  }
}
