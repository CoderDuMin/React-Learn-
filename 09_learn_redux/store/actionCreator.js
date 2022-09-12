import {
    INCREMENT,
    ADD_NUMBER,
    DECREMENT,
    SUB_NUMBER
} from './constants.js'


export const addAction = () => ({type:INCREMENT})

export const addNumAction = (num) => ({type:ADD_NUMBER,num})

export const subAction = () => ({type:DECREMENT})

export const subNumAction = (num) => ({type:SUB_NUMBER,num})