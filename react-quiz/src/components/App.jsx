import { useEffect, useReducer } from 'react'
import Error from './Error'
import Header from './Header'
import Loader from './Loader'
import MainSection from './MainSection'
import Question from './Question'
import StartScreen from './StartScreen'

const initialState = {
  questions: [],
  status: 'loading',
  index: 0,
  answer: null,
}

function reducer(state, action) {
  switch (action.type) {
    case 'dataRecieved':
      return { ...state, questions: action.payload, status: 'ready' }
    case 'error':
      return { ...state, status: 'error' }
    case 'start':
      return { ...state, status: 'active' }
    case 'newAnswer':
      const question = state.questions.at[state.index]
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      }
    default:
      throw new Error('Unknown Action')
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { questions, status, index, answer } = state

  const totalQuestions = questions.length

  useEffect(function() {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:8000/questions')
        const data = await response.json()
        dispatch({ type: 'dataRecieved', payload: data })
      } catch (error) {
        dispatch({ type: 'error' })
      }
    }

    fetchData()
  }, [])

  return (
    <div className='app'>
      <Header />
      <MainSection>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && (
          <StartScreen totalQuestions={totalQuestions} dispatch={dispatch} />
        )}
        {status === 'active' && (
          <Question
            question={questions[index]}
            dispatch={dispatch}
            answer={answer}
          />
        )}
      </MainSection>
    </div>
  )
}

export default App
