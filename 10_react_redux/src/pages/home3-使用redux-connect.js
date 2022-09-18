import React, { PureComponent } from 'react'
import axios from 'axios'

import {connect} from 'react-redux'
import {
  addAction,
  addNumAction,
  changeBannersAction,
  changeRecommendAction
} from '../store/actionCreator'

 class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>当前计数为:{this.props.counter}</h2>
        <button onClick={() => this.props.increment()}>+1</button>
        <button onClick={() => this.props.addNum()}>+5</button>
        <button onClick={() => this.getMultidata()}>获取数据</button>
      </div>
    )
  }
  getMultidata(){
    axios({
      url:'http://123.207.32.32:8000/home/multidata'
    }).then(res=>{
      this.props.getBanner(res.data.data.banner.list)
      this.props.getRecommand(res.data.data.recommend.list)
    })
  }
}
const mapState = (state) => {
  return {
    counter:state.counter
  }
}

const mapDispatch = (dispatch) => {
  return {
    increment(){
      dispatch(addAction())
    },
    addNum(){
      dispatch(addNumAction(5))
    },
    getRecommand(list){
      dispatch(changeBannersAction(list))
    },
    getBanner(list){
      dispatch(changeRecommendAction(list))
    }
  }
}

export default connect(mapState,mapDispatch)(Home)