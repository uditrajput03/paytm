import { useState } from "react"
import AuthRedirect from "../components/AuthRedirect"
import Button from "../components/Button"
import Heading from "../components/Heading"
import InputBox from "../components/InputBox"
import SubHeading from "../components/SubHeading"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

function Signup() {
    const [firstName , setFirstName] = useState("")
    const [lastName , setLastName] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const navigate = useNavigate()
    return(
        <div className="flex flex-col w-full h-full">
            <Heading label="Sign Up"/>
            <SubHeading label="Enter your information to create an account"/>
            <InputBox onChange={e => setFirstName(e.target.value)} label="First Name" placeholder="John"/>
            <InputBox onChange={e => setLastName(e.target.value)} label="Last Name" placeholder="Doe"/>
            <InputBox onChange={e => setEmail(e.target.value)} label="Email" placeholder="johndoe@example.com"/>
            <InputBox onChange={e => setPassword(e.target.value)} label="Password"/>
            <Button onClick={ async () => {
                let res = await axios.post('https://verbose-broccoli-5pvjppgwgr4fv5xv-3000.app.github.dev/api/v1/user/signup' , {
                    firstName,
                    lastName,
                    email,
                    password
                })
                if(res.data.token){
                    localStorage.setItem('token' , res.data.token);
                    navigate('/dashboard')
                }
            }} label="Sign Up"/>
            <AuthRedirect label="Already have an account? " page="Sign In" link="/Signin"/>
        </div>
    )
}
export default Signup