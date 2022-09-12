//defaultState
const defaultState = {
    counter:0
}
export const reducer = (state=defaultState,action) => {
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