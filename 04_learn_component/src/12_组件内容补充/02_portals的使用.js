import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'

import './index.css'

const modalEl = document.createElement('div')
modalEl.className = 'modal'
document.body.append(modalEl)
class Modal extends PureComponent{
  render(){
    return ReactDOM.createPortal(
      this.props.children,
      modalEl
    )
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>APP</h2>
        <Modal>
          <h2>这里是Modal</h2>
        </Modal>
      </div>
    )
  }
}
