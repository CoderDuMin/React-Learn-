import redux from 'redux'

import { reducer } from './reducer.js'
import {
    addAction,
    addNumAction,
    subAction,
    subNumAction
} from './actionCreator.js'

const store = redux.createStore(reducer)

store.subscribe(()=>{
    console.log('counter：',store.getState().counter)
})


store.dispatch(addAction())
store.dispatch(addNumAction(5))
store.dispatch(addNumAction(12))
store.dispatch(subAction())
store.dispatch(subNumAction(4))