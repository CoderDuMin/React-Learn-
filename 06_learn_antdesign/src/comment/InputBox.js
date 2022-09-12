import React, { PureComponent } from 'react'
import { Input,Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import styled from 'styled-components'
import moment from 'moment';

const {TextArea} = Input

const InputBoxWrapper = styled.div`
  width: 100%;
  padding: 10px ;
  .btn{
    margin-top: 10px;
  }
`

export default class InputBox extends PureComponent {
  constructor(props){
    super(props)
    this.state={
      keyWords:''
    }
  }
  render() {
    return (
      <InputBoxWrapper>
        <TextArea rows={4} placeholder="请输入你的评论" maxLength={6}  value={this.state.keyWords} onChange={e=>this.changeWord(e)} />
        <Button type="primary" shape="round" className='btn' icon={<EditOutlined />} onClick={()=>this.addComment()} >
          发送
        </Button>
      </InputBoxWrapper>
    )
  }
  changeWord(e){
    this.setState({
      keyWords:e.target.value
    })
  }
  addComment(){
    let commentInfo = {
      author:'yihamin',
      avatar:'https://avatars.githubusercontent.com/u/68316271?v=4',
      datetime:moment(),
      content:this.state.keyWords,
    }
    this.props.addComment(commentInfo)
    this.setState({
      keyWords:''
    })
  }
}
