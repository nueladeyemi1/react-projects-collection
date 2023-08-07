import { useEffect, useState, createContext, useContext } from 'react'

const CitiesContext = createContext()

const BASE_URL = 'http://localhost:9000'

export const CitiesProvider = ({ children }) => {
  const [cities, setCities] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(function() {
    async function fetchCities() {
      try {
        setIsLoading(true)
        const response = await fetch(`${BASE_URL}/cities`)
        const data = await response.json()
        setCities(data)
      } catch (error) {
        alert('There is an error loading data...')
      } finally {
        setIsLoading(false)
      }
    }

    fetchCities()
  }, [])
  return (
    <CitiesContext.Provider value={{ cities, isLoading }}>
      {children}
    </CitiesContext.Provider>
  )
}

export function useCities() {
  const context = useContext(CitiesContext)
  if (context === undefined)
    throw new Error('CitiesProvider was used outside the provider')

  return context
}
