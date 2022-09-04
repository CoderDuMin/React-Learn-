import React, { PureComponent } from 'react'
import homeStyle from './index.module.css'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        Home的标题
        <p className={homeStyle.content}>Home的内荣</p>
      </div>
    )
  }
}