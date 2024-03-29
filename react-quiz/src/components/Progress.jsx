import React from 'react'
import { useQuiz } from '../context/QuizContext'

const Progress = () => {
  const { totalQuestions, index, answer, points, maxPossiblePoints } = useQuiz()
  return (
    <header className='progress'>
      <progress max={totalQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong>/ {totalQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  )
}

export default Progress
