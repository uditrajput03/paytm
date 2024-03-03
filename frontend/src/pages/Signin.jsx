import { useState } from "react"
import AuthRedirect from "../components/AuthRedirect"
import Button from "../components/Button"
import Heading from "../components/Heading"
import InputBox from "../components/InputBox"
import SubHeading from "../components/SubHeading"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

function Signin() {
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const navigate = useNavigate()
    return(
        <div className="flex flex-col w-full h-full">
            <Heading label="Sign In"/>
            <SubHeading label="Enter your credentials to access your account"/>
            <InputBox onChange={e => setEmail(e.target.value)} label="Email"/>
            <InputBox onChange={e => setPassword(e.target.value)} label="Password"/>
            <Button onClick={async () => {
                let res = await axios.post("https://verbose-broccoli-5pvjppgwgr4fv5xv-3000.app.github.dev/api/v1/user/signin" , {
                    email,
                    password
                })
                if(res.data.token){
                    localStorage.setItem('token' , res.data.token);
                    navigate('/dashboard')
                }
            }} label="SignIn"/>
            <AuthRedirect label="Don't have an account? " page="Sign Up" link="/Signup"/>
        </div>
    )
}
export default Signin