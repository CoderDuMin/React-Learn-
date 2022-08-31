import React, { createRef, PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props){
    super(props)
    this.nameRef = createRef()
    this.state = {
      name:''
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={e=>this.handleSubmit(e)}>
          <label>
            姓名:
            <input type="text" ref={this.nameRef} />
          </label>
          <button type='submit'>提交</button>
        </form>
      </div>
    )
  }
  handleSubmit(e){
    e.preventDefault();
    console.log('提交',this.nameRef.current.value)
  }
}
