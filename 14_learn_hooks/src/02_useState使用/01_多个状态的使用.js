import React,{useState} from 'react'

export default function MultipleStateHook() {

  const [counter, setCounter] = useState(0)
  const [name, setName] = useState('异乡人')
  const [age, setAge] = useState(12)
  return (
    <div>
      <h2>当前计数:{counter}</h2>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
      <button onClick={e => setCounter(counter - 1)}>-1</button>
      <h2>姓名:{name}</h2>
      <button onClick={e => setName('dumin')}>改名</button>
      <h2>年龄:{age}</h2>
      <button onClick={e => setAge(age+1)}>过了一年</button>
    </div>
  )
}
