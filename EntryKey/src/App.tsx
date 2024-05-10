import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import SignupPage from './pages/SignupPage'
import MyPage from './pages/MyPage'
import './index.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/:userId" element={<MainPage />}/>
          <Route path="/my/:userId" element={<MyPage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/signUp" element={<SignupPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
