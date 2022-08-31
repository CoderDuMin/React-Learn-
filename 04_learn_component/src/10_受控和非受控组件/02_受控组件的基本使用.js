import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props){
    super(props)
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
            <input type="text" onChange={e=>this.handleChange(e)} value={this.state.name} />
          </label>
          <button type='submit'>提交</button>
        </form>
      </div>
    )
  }
  handleChange(e){
    console.log(e.target.value)
    this.setState({
      name:e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault();
    console.log('提交',this.state.name)
  }
}
