import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import { useKey } from './Hooks/useKey'

const Navbar = ({ movies, query, setQuery }) => {
  const inputFocusRef = useRef(null)

  useKey(function() {
    if (document.activeElement === inputFocusRef.current) return

    inputFocusRef.current.focus()
    setQuery('')
  }, 'Enter')

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
