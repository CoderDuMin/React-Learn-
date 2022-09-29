import React,{useState,useEffect} from 'react'
import useLocalStorage from '../hooks/local-store-hook'

export default function CustomDataStoreHook() {
  // const [name, setName] = useState()

  // useEffect(() => {
  //   localStorage.setItem('name',name)
  //   return ()=>{
  //     localStorage.removeItem('name')
  //   }
  // }, [name])

  const [name,setName] = useLocalStorage('name')
  
  return (
    <div>
      <h3>当前存储的姓名为:{name}</h3>
      <button onClick={e => setName('小王'+ Math.random().toFixed(2))}>改名</button>
    </div>
  )
}

