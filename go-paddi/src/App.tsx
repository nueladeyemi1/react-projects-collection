import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import FeedbackCard from './ui/FeedbackCard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FeedbackCard />} />
        <Route path='feedback'>
          <Route path=':comments' element={<FeedbackCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
