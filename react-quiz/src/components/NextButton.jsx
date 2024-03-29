import { useQuiz } from '../context/QuizContext'

const NextButton = () => {
  const { dispatch, answer, index, totalQuestions } = useQuiz()
  if (answer === null) return null

  if (index < totalQuestions - 1) {
    return (
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'nextQuestion' })}
      >
        Next
      </button>
    )
  }

  if (index === totalQuestions - 1) {
    return (
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'finish' })}
      >
        Finish
      </button>
    )
  }
}

export default NextButton
