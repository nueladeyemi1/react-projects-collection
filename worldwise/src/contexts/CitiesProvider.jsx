import {
  useEffect,
  useCallback,
  useReducer,
  createContext,
  useContext,
} from 'react'

const CitiesContext = createContext()

const BASE_URL = 'http://localhost:9000'

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: '',
}

function reduer(state, action) {
  switch (action.type) {
    case 'loading':
      return { ...state, isLoading: true }
    case 'cities/loaded':
      return { ...state, cities: action.payload, isLoading: false }
    case 'city/loaded':
      return { ...state, currentCity: action.payload, isLoading: false }
    case 'cities/created':
      return {
        ...state,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
        isLoading: false,
      }
    case 'cities/deleted':
      return {
        ...state,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currentCity: {},
        isLoading: false,
      }
    case 'reject':
      return { ...state, isLoading: false, error: action.payload }
  }
}

export const CitiesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reduer, initialState)

  const { cities, isLoading, currentCity, error } = state

  // const [cities, setCities] = useState([])
  // const [isLoading, setIsLoading] = useState(false)
  // const [currentCity, setCurrentcity] = useState({})

  useEffect(function() {
    async function fetchCities() {
      dispatch({ type: 'loading' })
      try {
        const response = await fetch(`${BASE_URL}/cities`)
        const data = await response.json()
        dispatch({ type: 'cities/loaded', payload: data })
      } catch (error) {
        dispatch({
          type: 'error',
          payload: 'There is an error loading data...',
        })
      }
    }

    fetchCities()
  }, [])

  const getCity = useCallback(
    async function getCity(id) {
      if (+id === currentCity.id) return

      dispatch({ type: 'loading' })
      try {
        const response = await fetch(`${BASE_URL}/cities/${id}`)
        const data = await response.json()
        dispatch({ type: 'city/loaded', payload: data })
      } catch (error) {
        dispatch({
          type: 'error',
          payload: 'There is an error getting data...',
        })
      }
    },
    [currentCity.id]
  )

  async function createCity(newCity) {
    dispatch({ type: 'loading' })
    try {
      const response = await fetch(`${BASE_URL}/cities`, {
        method: 'POST',
        body: JSON.stringify(newCity),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await response.json()
      dispatch({ type: 'cities/created', payload: data })
    } catch (error) {
      dispatch({
        type: 'error',
        payload: 'There is an error creating city...',
      })
    }
  }

  async function deleteCity(id) {
    dispatch({ type: 'loading' })
    try {
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: 'DELETE',
      })

      dispatch({ type: 'cities/deleted', payload: id })
    } catch (error) {
      dispatch({
        type: 'error',
        payload: 'There is an error deleting city...',
      })
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}
    >
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
