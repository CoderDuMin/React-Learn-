import React, { PureComponent } from 'react'
import {List,Comment,Button,Avatar,Image,Tooltip} from 'antd'
import styled from 'styled-components'
import moment from 'moment'

const ShowBoxWrapper  = styled.div`
  padding: 15px 10px;
`

export default class ShowBox extends PureComponent {

  render() {
    const {commentsList} = this.props
    return (
      <ShowBoxWrapper>
        <List
          className="comment-list"
          header={`${commentsList.length} 条评论`}
          itemLayout="horizontal"
          dataSource={commentsList}
          renderItem={item => (
            <li>
              <Comment
                actions={
                  [<Button type="link" >
                    回复
                  </Button>]
                }
                author={
                  <span>{item.author}</span>
                }
                avatar={
                  <Avatar src={<Image src={item.avatar} style={{ width: 32 }} />} />
                }
                content={item.content}
                datetime={
                  <Tooltip title={item.datetime.format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{item.datetime.fromNow()}</span>
                  </Tooltip>
                }
              />
            </li>
          )}
        />
      </ShowBoxWrapper>
    )
  }
}
