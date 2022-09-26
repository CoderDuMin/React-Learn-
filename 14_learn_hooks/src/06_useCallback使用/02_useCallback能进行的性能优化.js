import React, { useCallback, useState,memo } from 'react'

const DmBtn = memo((props)=>{
  console.log(props.title+'重新渲染')
  return(
    <button onClick={props.increment}>+1</button>
  )
})

export default function CallbackHookDemo01() {
  const [count,setCount]  = useState(0)
  const [isLogin,setLogin] = useState(false)
  const increment1 = () => {
    console.log('执行increment1函数');
    setCount(count+1)
  }
  const increment2 = useCallback(() => {
    console.log('执行increment2函数');
    setCount(count+1)
  },[count])
  return (
    <div>
      <h2>当前计数:{count}</h2>
      <DmBtn title="btn1" increment={increment1} />
      <DmBtn title="btn2" increment={increment2} />
      <button onClick={e=>setLogin(!isLogin)}>切换login</button>
    </div>
  )
}
