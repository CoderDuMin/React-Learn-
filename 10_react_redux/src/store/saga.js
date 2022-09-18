import {takeEvery,put, all} from 'redux-saga/effects'
import axios from 'axios'

import { FETCH_MULTIDATA } from './constants'

import { changeBannersAction,changeRecommendAction} from './actionCreator'

function* fetchData(){
  const res = yield axios({
    url:'http://123.207.32.32:8000/home/multidata'
  })
  const banners = res.data.data.banner.list
  const recommends = res.data.data.recommend.list
  // yield put(changeBannersAction(banners))
  // yield put(changeRecommendAction(recommends))
  yield all([ 
    yield put(changeBannersAction(banners)),
    yield put(changeRecommendAction(recommends))
  ])
}

export default function* sage(){
  yield takeEvery(FETCH_MULTIDATA,fetchData)
} 