import {
    INCREMENT,
    ADD_NUMBER,
    DECREMENT,
    SUB_NUMBER,
    CHANGE_BANNERS,
    CHANGE_RECOMMEND,
    FETCH_MULTIDATA
} from './constants.js'
import axios from 'axios'


export const addAction = () => ({type:INCREMENT})

export const addNumAction = (num) => ({type:ADD_NUMBER,num})

export const subAction = () => ({type:DECREMENT})

export const subNumAction = (num) => ({type:SUB_NUMBER,num})

// 轮播图和推荐的action
export const changeBannersAction = (banners) => ({
    type: CHANGE_BANNERS,
    banners
  });
  
export const changeRecommendAction = (recommends) => ({
    type: CHANGE_RECOMMEND,
    recommends
});
  

// redux-thunk -应用函数
export const getMultidata = (dispatch,getState) =>{
  console.log('getMultidata',dispatch,getState());
  axios({
      url:'http://123.207.32.32:8000/home/multidata'
    }).then(res=>{
      dispatch(changeBannersAction(res.data.data.banner.list))
      dispatch(changeRecommendAction(res.data.data.recommend.list))
    })
}

// saga
export const fetchMultidataAction = () => ({
  type: FETCH_MULTIDATA
});