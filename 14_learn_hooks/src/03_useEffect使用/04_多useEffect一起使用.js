import React, { useState, useEffect } from 'react'

export default function MultiEffectHookDemo() {
  const [count, setCount] = useState(0);

  // dom变更
  useEffect(()=>{
    document.title = count
  })
  // 订阅事件
  useEffect(()=>{
    console.log('订阅了一些事件')
    return () => {
      console.log('取消订阅了一些事件')
    }
  },[])
  // 网络请求
  useEffect(()=>{
    console.log('发送了网络请求')
  },[])

  return (
    <div>
      <h2>MultiEffectHookDemo</h2>
      <h2>{count}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
    </div>
  )
}
