import {createStore,applyMiddleware,compose} from 'redux'
import reduxThunk from 'redux-thunk'
import createSaga from 'redux-saga'
import saga from './saga'
import { reducer } from './reducer.js'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// redux-sage 使用
const sageMiddleWare = createSaga()

// 应用中间件
const storeEnhance = applyMiddleware(reduxThunk,sageMiddleWare)

const store = createStore(reducer,composeEnhancers(storeEnhance))

sageMiddleWare.run(saga)

export default store



