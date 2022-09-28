import React, { forwardRef, PureComponent, useRef } from 'react'

class TextCpn1 extends PureComponent{
  render(){
    return (
      <h3>textCpn1</h3>
    )
  }
}
const TextCpn2 =forwardRef((props,ref)=>{
  return (
    <h3 ref={ref}>TExtCpn2</h3>
  )
})

export default function UseRefHookDemo01() {
  const titleRef = useRef()
  const inputRef = useRef()
  const cpn1Ref = useRef()
  const cpn2Ref = useRef()
  const changeDom = ()=>{
    titleRef.current.innerText = '这是改变后的文字'
    inputRef.current.focus()
    console.log('titleRef',titleRef.current)
    console.log('inputRef',inputRef.current)
    console.log('cpn1Ref',cpn1Ref.current)
    console.log('cpn2Ref',cpn2Ref.current)
  }
  return (
    <div>
      <h2 ref={titleRef}>UseRefHookDemo01</h2>
      <input ref={inputRef} type={'text'}></input>
      <TextCpn1 ref={cpn1Ref} />
      <TextCpn2 ref={cpn2Ref} />
      <button onClick={e=>changeDom()}>切换</button>
    </div>
  )
}
