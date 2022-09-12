import redux from 'redux'

//defaultState
const defaultState = {
    counter:0
}
//reducer
const reducer = (state=defaultState,action) => {
    switch(action.type){
        case 'INCREMENT':
            return {...state,counter:state.counter + 1}
        case 'ADD_NUMBER':
            return {...state,counter:state.counter + action.num}
        case 'DECREMENT':
            return {...state,counter:state.counter - 1}
        case 'SUB_NUMBER':
            return {...state,counter:state.counter - action.num}
        default:
            return state;
    }
}

// store
const store = redux.createStore(reducer)

// subscribe
store.subscribe(()=>{
    console.log('counter：',store.getState().counter)
})

//action
const action1 = {type:'INCREMENT'}
const action2 = {type:'ADD_NUMBER',num:5}
const action3 = {type:'DECREMENT'}
const action4 = {type:'SUB_NUMBER',num:5}

//dispatch
store.dispatch(action1)
store.dispatch(action2)
store.dispatch(action2)
store.dispatch(action3)
store.dispatch(action4)

