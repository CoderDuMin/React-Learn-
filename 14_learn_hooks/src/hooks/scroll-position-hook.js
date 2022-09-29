import { useState, useEffect } from 'react';

function useScrollPosition() {
  const [scrolly, setScrolly] = useState(0)
  const scrollScreen = ()=>{
    setScrolly(window.scrollY)
  }
  useEffect(() => {
    document.addEventListener('scroll',scrollScreen)
    return ()=>{
      document.removeEventListener('scroll',scrollScreen)
    }
  }, [])
  return scrolly
}

export default useScrollPosition;