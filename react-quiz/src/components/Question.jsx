import { useQuiz } from '../context/QuizContext'
import Options from './Options'

const Question = () => {
  const { questions, index } = useQuiz()
  const question = questions.at(index)
  return (
    <div>
      <h4>{question.question}</h4>
      <Options />
    </div>
  )
}

export default Question
