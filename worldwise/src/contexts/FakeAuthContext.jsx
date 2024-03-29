import { createContext, useContext, useReducer } from 'react'

const AuthContext = createContext()

const initialState = {
  user: null,
  isAuthenticated: false,
}

function reducer(state, action) {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      }
    case 'lagout':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      }
    default:
      throw new Error('Unknown action')
  }
}

const FAKE_USER = {
  name: 'Jack',
  email: 'jack@example.com',
  password: 'qwerty',
  avatar: 'https://i.pravatar.cc/100?u=zz',
}

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const { user, isAuthenticated } = state

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: 'login', payload: FAKE_USER })
    }
  }

  function logout() {
    dispatch({ type: 'lagout' })
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined)
    throw new Error('This context was used outside the AuthProvider')

  return context
}
