import React, { useContext } from 'react'
import {UserContext,FoodContext} from '../App'

export default function HookWithContext() {
  const userContext = useContext(UserContext)
  const foodContext = useContext(FoodContext)
  console.log(userContext,foodContext)
  return (
    <div>
      <h2>HookWithContext</h2>
    </div>
  )
}
