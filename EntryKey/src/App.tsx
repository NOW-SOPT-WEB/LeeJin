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
          <Route path="/" element={<LoginPage />}/>
          <Route path="/main" element={<MainPage />}/>
          <Route path="/my" element={<MyPage />}/>
          <Route path="/signUp" element={<SignupPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
