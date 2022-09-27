import React,{useState,useMemo, memo} from 'react'

const DmInfo = memo((props)=>{
  console.log('DmInfo重新渲染')
  return (
    <h2>姓名:{props.info.name} - 年龄:{props.info.age}</h2>
  )
})

export default function UseMemoHookDemo02() {
  console.log('UseMemoHookDemo02重新渲染')
  const [show, setShow] = useState(false)
  // const info = {name:'aaa',age:18}
  const info = useMemo(()=>{
    return {name:'aaa',age:18}
  },[])
  return (
    <div>
      <h2>UseMemoHookDemo02</h2>
      <DmInfo info={info} />
      <button onClick={e=>setShow(!show)}>切换show</button>
    </div>
  )
}
