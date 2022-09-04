import React, { Fragment, PureComponent ,StrictMode} from 'react'

class Home extends PureComponent{
  constructor(props){
    super(props)
    console.log('HOME的constructor')
  }
  render(){
    return (
      <Fragment>
        <h2>Home组件</h2>
      </Fragment>
    )
  }
  UNSAFE_componentWillMount(){
    console.log('Home UNSAFE_componentWillMount')
  }
}
class About extends PureComponent{
  constructor(props){
    super(props)
    console.log('About的constructor')
  }
  render(){
    return (
      <Fragment>
        <h2>About组件</h2>
      </Fragment>
    )
  }

  UNSAFE_componentWillMount(){//严格模式中会报错
    console.log('About UNSAFE_componentWillMount')
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <StrictMode>
          <About />
        </StrictMode>
      </div>
    )
  }
}
