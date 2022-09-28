import React, { forwardRef, useRef } from 'react'

const Cpn1 = forwardRef((props,ref)=>{
  return(
    <input type="text" ref={ref} />
  )
})
export default function ForwardRefDemo() {
  const inputRef = useRef()
  return (
    <div>
      <Cpn1 ref={inputRef} ></Cpn1>
      <button onClick={e=>inputRef.current.focus()}>聚焦</button>
    </div>
  )
}
