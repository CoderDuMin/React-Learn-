import React,{PureComponent} from 'react'
import store from '../store/index'

export function connect(mapStateToProps,mapDispatchToProps){
  return function exhanceHOC(WrappedComponent){
    class ExhanceComPonent extends PureComponent{
      constructor(props){
        super(props)
        this.state = {
          storeState:store.getState()
        }
      }
      componentDidMount(){
        store.subscribe(()=>{
          this.setState({
            storeState:store.getState()
          })
        })
      }
      render(){
        return (
          <WrappedComponent {...this.props}
              {...mapStateToProps(store.getState())}
              {...mapDispatchToProps(store.dispatch)} />
        )
      }
    }
    return ExhanceComPonent
  }
}