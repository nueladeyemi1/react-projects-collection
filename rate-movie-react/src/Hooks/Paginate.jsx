import { useState, useEffect } from 'react'
import styles from './Paginate.module.css'

export const Paginate = ({ URL, type = '' }) => {
  const [contents, setContents] = useState('')
  const [error, setError] = useState('')
  const [currentPage, setCurrenPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const totalContents = contents.length
  const contentPerPage = 10
  const totalPages = Math.floor(totalContents / contentPerPage)
  const pages = contents.length

  const start = contentPerPage * (currentPage - 1)
  const end = contentPerPage * currentPage

  useEffect(function() {
    setIsLoading(true)
    async function fetchData() {
      try {
        const response = await fetch(`${URL}`)
        const data = await response.json()
        setContents(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  function handleNext() {
    const nextPage = Math.min(currentPage + 1, 1)
    setCurrenPage(nextPage)
  }

  function handlePrev() {
    const prevPage = Math.max(currentPage - 1, pages)
    setCurrenPage(prevPage)
  }
  // console.log(contents.slice(0, 10))
  ///

  ///
  return (
    <>
      <div>
        {contents.slice(start, end)?.map((content) => {
          return <p>{content.title}</p>
        })}
      </div>
      {type === 'number' ? (
        <PageNumbers pages={pages} end={end} start={start} />
      ) : (
        <div>
          <Button onClick={() => handlePrev}>Prev</Button>
          <Button onClick={() => handleNext}>Next</Button>
        </div>
      )}
    </>
  )
}

const Button = ({ children, onClick, className, style }) => {
  return (
    <button onClick={onClick} className={className} style={{ ...style }}>
      {children}
    </button>
  )
}

const PageNumbers = ({ pages, end, start, onClick }) => {
  console.log(start, end)
  return (
    <div className={styles.numberButton}>
      {Array.from({ length: pages }, (_, i) => i + 1)
        .slice(start, end)
        .map((page) => {
          return (
            <div onClick={onClick} className={styles.eachBtn}>
              <p>{page}</p>
            </div>
          )
        })}
    </div>
  )
}
