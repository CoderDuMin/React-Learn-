import React, { PureComponent } from 'react'
import InputBox from './InputBox'
import ShowBox from './ShowBox'


export default class App extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      commentsList:[]
    }
  }
  render() {
    const { commentsList } = this.state
    return (
      <div>
        <ShowBox commentsList={commentsList} />
        <InputBox  addComment={(commentInfo) => this.addComment(commentInfo)} />
      </div>
    )
  }
  addComment(commentInfo){
    this.setState({
      commentsList: [...this.state.commentsList,commentInfo]
    })
  }
}
