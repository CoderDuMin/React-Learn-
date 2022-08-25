import React from 'react'

function Cpn(props){
  return (
    <h2>{props.name+'-'+props.age+'-'+props.height}</h2>
  )
}

export default function App() {
  return (
    <div>
      <Cpn name={'李晓明'} age={18} height={1.88} />
    </div>
  )
}
