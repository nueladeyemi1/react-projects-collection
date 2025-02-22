import { useQuiz } from '../context/QuizContext'

const Options = () => {
  const { questions, dispatch, answer, index } = useQuiz()
  const question = questions.at(index)
  const hasAnswered = answer !== null
  return (
    <div className='options'>
      {question.options.map((option, i) => (
        <button
          className={`btn btn-option ${i === answer ? 'answer' : ''} ${
            hasAnswered
              ? i === question.correctOption
                ? 'correct'
                : 'wrong'
              : ''
          }`}
          key={i}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: 'newAnswer', payload: i })}
        >
          {option}
        </button>
      ))}
    </div>
  )
}

export default Options
