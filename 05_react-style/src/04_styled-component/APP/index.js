import React, { PureComponent } from 'react'
import styled,{ThemeProvider} from 'styled-components'
import Home from '../Home'

const AppContainer = styled.div`
  width: 300px;
  height: 300px;
  background-color: #f5f5f5;
  &:hover{
    background-color: #eee;
  }
`  

export default class index extends PureComponent {
  render() {
    return (
      <ThemeProvider theme={{themBgColor:'skygreen',themFontSize:'16px'}}>
        <AppContainer>
          <h2>App组件</h2>
          <p>App的文本内容</p>
          <hr/>
          <Home />
        </AppContainer>
      </ThemeProvider>
    )
  }
}
