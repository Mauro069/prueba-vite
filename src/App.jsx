import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Detail, Form, LandingPage, Home } from './views'
import NavBar from './components/NavBar/NavBar'

function App () {
  const { pathname } = useLocation()

  return (
    <div className='App'>
      {pathname !== '/' && <NavBar />}

      <Routes>
        <Route path='/' element={<LandingPage />} />

        <Route path='/create' element={<Form />} />

        <Route path='/detail/:id' element={<Detail />} />

        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
