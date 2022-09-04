import React, { PureComponent } from 'react'
import styled from 'styled-components'

const HomeWrapper = styled.div.attrs({
  bgColor:'skyblue'
})`
  .box{
    background-color: ${props=>props.bgColor};
    font-size: 26px;
    text-decoration: underline;
    p{
      font-size: ${props=>props.theme.themFontSize};
      background-color: ${props=>props.theme.themBgColor};
    }
  }
`

export default class Home extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      themColor:'yellow',
      fontColor:'red'
    }
  }
  render() {
    return (
      <HomeWrapper>
        Home
        <div className='box'>
          我是Home的box
          <p>这是内容</p>
        </div>
      </HomeWrapper>
    )
  }
}
