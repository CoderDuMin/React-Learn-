import React,{useState,useMemo} from 'react'

function calcNum(count){
  console.log('执行该计算函数')
  let total = 0
    for(let i=1;i<=count;i++){
      total += i
    }
    return total
}

export default function MemoHookDemo01() {
  console.log('重新渲染MemoHookDemo01')
  const [count, setCount] = useState(10)
  const [show, setShow] = useState(false)
  let total = useMemo(()=>calcNum(count),[count])
  return (
    <div>
      <h2>当前总数：{total}</h2>
      <button onClick={e=>setCount(count+1)}>+1</button>
      <button onClick={e=>setCount(count-1)}>-1</button>
      <button onClick={e=>setShow(!show)}>切换show</button>
    </div>
  )
}
