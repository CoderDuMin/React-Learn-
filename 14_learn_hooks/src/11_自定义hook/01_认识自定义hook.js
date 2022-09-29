import React, { useEffect } from 'react'

function useLifeLog(key){
  useEffect(()=>{
    console.log(`${key}组件被创建`)
    return ()=>{
      console.log(`${key}组件被销毁`)
    }
  },[])
}

function Cpn1(props){
  useLifeLog('Cpn1')
  return <h3>Cpn1</h3>
}

function Cpn2(props){
  useLifeLog('Cpn2')
  return <h3>Cpn2</h3>
}

export default function CustomLifeHook() {
  // useEffect(()=>{
  //   console.log('CustomLifeHook被创建')
  //   return ()=>{
  //     console.log('CustomLifeHook被销毁')
  //   }
  // },[])
  useLifeLog('CustomLifeHook')
  return (
    <div>
      <h2>CustomLifeHook</h2>
      <Cpn1 />
      <Cpn2 />
    </div>
  )
}
