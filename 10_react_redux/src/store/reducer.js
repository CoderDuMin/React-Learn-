//defaultState
const defaultState = {
    counter:0,
    banners:[],
    recommends:[]
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
        case 'CHANGE_BANNERS':
            return { ...state, banners: action.banners };
        case 'CHANGE_RECOMMEND':
            return { ...state, recommends: action.recommends };
        default:
            return state;
    }
}