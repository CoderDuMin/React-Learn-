import React, { useRef, forwardRef, useImperativeHandle } from 'react';

const Cpn1 = forwardRef((props,ref)=>{
  const inputRef = useRef()
  useImperativeHandle(ref,()=>(
    {
      focus(){
        inputRef.current.focus()
      }
    }
  ))
  return(
    <input type="text" ref={inputRef} />
  )
})
export default function UseImperativeHandleDemo() {
  const inputRef = useRef()
  console.log(inputRef.current)
  
  return (
    <div>
      <Cpn1 ref={inputRef} ></Cpn1>
      <button onClick={e=>inputRef.current.focus()}>聚焦</button>
    </div>
  )
}
