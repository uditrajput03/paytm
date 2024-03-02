import { useState } from 'react'
import { Route ,Routes , BrowserRouter } from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signin from './pages/Signin'
import Bold from './components/Bold'
import AuthCard from './components/AuthCard'
import Heading from './components/Heading'
import SubHeading from './components/SubHeading'
import InputBox from './components/InputBox'
import Button from './components/Button'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import SendMoney from './pages/SendMoney'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<AuthCard><Signup/></AuthCard>}/>
        <Route path="/signin" element={<AuthCard><Signin/></AuthCard>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/send" element={<SendMoney/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
