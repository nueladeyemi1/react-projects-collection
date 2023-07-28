import { useState, useEffect } from 'react'

const KEY = 'a11bbaa7'

export const useMovie = (query, handleBack) => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [message, SetMessage] = useState('')

  useEffect(
    function() {
      const controller = new AbortController()

      const fetchData = async function() {
        try {
          setIsLoading(true)
          SetMessage('')
          // console.log(query)
          const response = await fetch(
            `http://www.omdbapi.com/?s=${query}&apikey=${KEY}`,
            { signal: controller.signal }
          )

          // console.log(response)

          if (!response.ok)
            throw new Error('Something went wrong with fetching movies')

          const data = await response.json()

          // console.log(data)

          if (data.Response === 'False') throw new Error('Movie not found')

          setMovies(data.Search)
          SetMessage('')
        } catch (error) {
          if (error.name !== 'AbortError') {
            SetMessage(error.message)
          }
        } finally {
          setIsLoading(false)
        }
      }

      if (query.length < 3) {
        setMovies([])
        SetMessage('')
        return
      }

      fetchData()
      handleBack()

      return function() {
        controller.abort()
      }
    },

    [query]
  )

  return { movies, isLoading, message }
}
