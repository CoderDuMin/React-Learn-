import React, { useContext } from 'react'
import { useUserContextHook } from '../hooks/userHooks';
// import { TokenContext, UserContext } from '../App'

export default function CustomContextHook() {
  // const user = useContext(UserContext)
  // const token = useContext(TokenContext)
  const [user,token] = useUserContextHook()

  console.log(user,token);
  return (
    <div>
      <h3>CustomContextHook</h3>
    </div>
  )
}
