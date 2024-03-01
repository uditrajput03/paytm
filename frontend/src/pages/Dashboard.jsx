import Appbar from "../components/Appbar"
import Balance from "../components/Balance"
import Button from "../components/Button"
import InputBox from "../components/InputBox"
import UsersList from "../components/UsersList"
import UserSearch from "../components/UsersSearch"

function Dashboard(params) {
    return(
        <div className="m-2">
            <Appbar />
            <Balance />
            <UserSearch/>
            <UsersList/>
        </div>
    )
}
export default Dashboard