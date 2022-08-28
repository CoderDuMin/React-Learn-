import React, { Component } from 'react'
import Navbar from './NavBar'
import Navbar2 from './NavBar2'

import './index.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar >
          <span>左边</span>
          <strong>中间</strong>
          <span>右边</span>
        </Navbar>
        <Navbar2 leftSlot={<span>左边</span>} 
                 centerSlot={<strong>中间</strong>} 
                 rightSlot={<span>右边</span>}/>
      </div>
    )
  }
}
