import React,{useLayoutEffect, useState} from 'react'

export default function UseLayoutEffectDemo02() {
  const [count, setCount] = useState(10)
  useLayoutEffect(()=>{
    console.log('count',count)
    if(count === 0){
      setCount(Math.random())
    }else{
      let start = (new Date()).getTime();
      //只要现在时间 - 开始时间 < 延迟时间，则继续睡眠
      while (new Date().getTime() - start < 2000) {
          continue;
      }
    }
  },[count])
  return (
    <div>
      <h2>当前计数:{count}</h2>
      <button onClick={e => setCount(0)}>变换</button>
    </div>
  )
}
