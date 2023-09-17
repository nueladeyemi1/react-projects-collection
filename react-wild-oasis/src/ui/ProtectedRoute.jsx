import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useUser } from '../features/authentication/useUser'
import Spinner from './Spinner'

const fullPage = styled.div`
    height: 100vh;
    background-color: var(--color-grey-50)
    display: flex;
    align-items: center;
    justify-content: center;
`

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate()

  const { isLoading, isAuthenticated } = useUser()

  useEffect(
    function() {
      if (!isAuthenticated && !isLoading) navigate('/login')
    },
    [isAuthenticated, isLoading, navigate]
  )

  if (isLoading) {
    return (
      <fullPage>
        <Spinner />
      </fullPage>
    )
  }

  if (isAuthenticated) return children
}

export default ProtectedRoute
