import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      fruit:''
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={e=>this.handleSubmit(e)}>
          <label>
            水果:
            <select onChange={e=>this.handleChange(e)} value={this.state.fruit}>
              <option value="banana">香蕉</option>
              <option value="apple">苹果</option>
              <option value="orange">橘子</option>
            </select>
          </label>
          <button type='submit'>提交</button>
        </form>
      </div>
    )
  }
  handleChange(e){
    console.log(e.target.value)
    this.setState({
      fruit:e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault();
    console.log('提交',this.state.fruit)
  }
}
