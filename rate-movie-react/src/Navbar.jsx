import React, { useRef, useState } from 'react'
import { useEffect } from 'react'

const Navbar = ({ movies, query, setQuery }) => {
  const inputFocusRef = useRef(null)

  useEffect(
    function() {
      function callback(e) {
        if (document.activeElement === inputFocusRef.current) return

        if (e.code === 'Enter') {
          inputFocusRef.current.focus()
          setQuery('')
        }
      }

      document.addEventListener('keydown', callback)

      return function() {
        document.removeEventListener('keydown', callback)
      }
    },
    [setQuery]
  )

  return (
    <nav className='nav-bar'>
      <div className='logo'>
        <span role='img'>🍿</span>
        <h1>usePopcorn</h1>
      </div>
      <input
        className='search'
        type='text'
        placeholder='Search movies...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        ref={inputFocusRef}
      />
      <p className='num-results'>
        Found <strong>{movies?.length}</strong> results
      </p>
    </nav>
  )
}

export default Navbar
