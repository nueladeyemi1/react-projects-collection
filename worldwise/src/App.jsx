import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Product from './pages/Product'
import Pricing from './pages/Pricing'
import PageNotFound from './pages/PageNotFound'
import Login from './pages/Login'
import AppLayout from './pages/AppLayout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='product' element={<Product />} />
        <Route path='pricing' element={<Pricing />} />
        <Route path='login' element={<Login />} />
        <Route path='app' element={<AppLayout />}>
          <Route index element={<p>Mini Home</p>} />
          <Route path='cities' element={<p>Cities</p>} />
          <Route path='countries' element={<p>Countires</p>} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
