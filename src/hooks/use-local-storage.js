import { useState, useEffect } from 'react'

function getStorageValue(key, defaultValue) {

  if (typeof window !== 'undefined' && localStorage) {
    const saved = localStorage.getItem(key)

    const initial = saved !== null ? JSON.parse(saved) : defaultValue
    return initial
  }
}

const useLocalStorage = (key, defaultValue) => {

  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue)
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

export default useLocalStorage