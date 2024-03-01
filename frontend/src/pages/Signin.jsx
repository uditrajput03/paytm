import AuthRedirect from "../components/AuthRedirect"
import Button from "../components/Button"
import Heading from "../components/Heading"
import InputBox from "../components/InputBox"
import SubHeading from "../components/SubHeading"

function Signin() {
    return(
        <div className="flex flex-col w-full h-full">
            <Heading label="Sign In"/>
            <SubHeading label="Enter your credentials to access your account"/>
            <InputBox label="Email"/>
            <InputBox label="Password"/>
            <Button label="SignIn"/>
            <AuthRedirect label="Don't have an account? " page="Sign Up" link="/Signup"/>
        </div>
    )
}
export default Signin