import Button from "../components/Button"
import Heading from "../components/Heading"
import InputBox from "../components/InputBox"
import SubHeading from "../components/SubHeading"

function Signup() {
    return(
        <div className="flex flex-col w-full h-full">
            <Heading label="Sign Up"/>
            <SubHeading label="Enter your information to create an account"/>
            <InputBox label="First Name" placeholder="John"/>
            <InputBox label="Last Name" placeholder="Doe"/>
            <InputBox label="Email" placeholder="johndoe@example.com"/>
            <InputBox label="Password"/>
            <Button label="Sign Up"/>
        </div>
    )
}
export default Signup