import { useQuiz } from '../context/QuizContext'
import NextButton from './NextButton'
import Progress from './Progress'
import Question from './Question'
import StartScreen from './StartScreen'
import Timer from './Timer'
import Error from './Error'
import FinishedScreen from './FinishedScreen'
import Loader from './Loader'
import Footer from './Footer'

const MainSection = () => {
  const { status } = useQuiz()

  return (
    <main className='main'>
      {status === 'loading' && <Loader />}
      {status === 'error' && <Error />}
      {status === 'ready' && <StartScreen />}
      {status === 'active' && (
        <>
          <Progress />
          <Question />
          <Footer>
            <Timer />
            <NextButton />
          </Footer>
        </>
      )}
      {status === 'finished' && <FinishedScreen />}
    </main>
  )
}

export default MainSection
