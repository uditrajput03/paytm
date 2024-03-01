import { useState } from 'react'
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
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    {/* <Bold>PAYTM</Bold> */}
    {/* <Heading label="uuu"/>
    <SubHeading label="uuu"/>
    <InputBox label="uuu" placeholder="John"/>
  <Button label="UUU"/> */}
    <AuthCard>
  <Signup/>
  {/* <Signin/> */}
  </AuthCard>
    </>
  )
}

export default App
