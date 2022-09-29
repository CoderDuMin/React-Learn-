import {useState, useEffect} from 'react';

function useLocalStorage(key) {
  const [name, setName] = useState()

  useEffect(() => {
    localStorage.setItem('key',name)
    return ()=>{
      localStorage.removeItem('key')
    }
  }, [name])
  return [name,setName]
}

export default useLocalStorage;
