import { createContext, useContext, useReducer, useEffect } from 'react'

const SECS_PER_QUESTION = 30

const initialState = {
  questions: [],
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  secondsRemaining: null,
}

function reducer(state, action) {
  switch (action.type) {
    case 'dataRecieved':
      return { ...state, questions: action.payload, status: 'ready' }
    case 'error':
      return { ...state, status: 'error' }
    case 'start':
      return {
        ...state,
        status: 'active',
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      }
    case 'newAnswer':
      const question = state.questions.at(state.index)
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question?.correctOption
            ? state.points + question.points
            : state.points,
      }
    case 'nextQuestion':
      return { ...state, index: state.index + 1, answer: null }
    case 'finish':
      return {
        ...state,
        status: 'finished',
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      }
    case 'reset':
      return { ...initialState, questions: state.questions, status: 'ready' }
    case 'tick':
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? 'finished' : state.status,
      }

    default:
      throw new Error('Unknown Action')
  }
}

const QuizContext = createContext()

export function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const {
    questions,
    status,
    index,
    answer,
    points,
    highScore,
    secondsRemaining,
  } = state

  const totalQuestions = questions.length
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  )

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
    <QuizContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        points,
        highScore,
        secondsRemaining,
        dispatch,
        totalQuestions,
        maxPossiblePoints,
      }}
    >
      {children}
    </QuizContext.Provider>
  )
}

export const useQuiz = function() {
  const context = useContext(QuizContext)
  if (context === undefined)
    throw new Error('useQuiz was used outside the provider')

  return context
}
