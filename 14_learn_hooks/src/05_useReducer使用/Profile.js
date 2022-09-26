import React ,{useReducer} from 'react'
import {reducer} from './reducer'
export default function Profile() {
  const [state,dispatch] = useReducer(reducer,0)
  return (
    <div>
      <h2>Profile当前计数:{state}</h2>
      <button onClick={e=>dispatch({type:'add'})}>+1</button>
      <button onClick={e=>dispatch({type:'sub'})}>-1</button>
    </div>
  )
}
