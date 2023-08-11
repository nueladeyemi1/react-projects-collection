import { QuizProvider } from '../context/QuizContext'

import Header from './Header'

import MainSection from './MainSection'

function App() {
  return (
    <QuizProvider>
      <div className='app'>
        <Header />
        <MainSection />
      </div>
    </QuizProvider>
  )
}

export default App
