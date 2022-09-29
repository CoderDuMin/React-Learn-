import React, { useState,useEffect } from 'react'
import useScrollPosition from '../hooks/scroll-position-hook'

export default function CustomScrollPositionHook() {
  // const [scrolly, setScrolly] = useState(0)
  // useEffect(() => {
  //   document.addEventListener('scroll',()=>{
  //     setScrolly(window.scrollY)
  //   })
  // }, [])

  const scrolly = useScrollPosition()
  
  return (
    <div style={{padding:'1000px 0'}}>
      <h2 style={{position:'fixed',top:'0',left:'0'}}>当前滚动位置:{scrolly}</h2>
    </div>
  )
}
