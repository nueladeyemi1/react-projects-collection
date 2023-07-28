import { useState, useEffect } from 'react'

export const useLocalstorageState = (initialState, key) => {
  const [value, setValue] = useState(function() {
    const storedData = localStorage.getItem(key)
    return storedData ? JSON.parse(storedData) : initialState
  })

  useEffect(
    function() {
      localStorage.setItem(key, JSON.stringify(value))
    },
    [value]
  )

  return [value, setValue]
}
