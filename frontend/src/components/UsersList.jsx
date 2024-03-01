import Button from "./Button"

function UsersList() {
    return(
        <div className="flex justify-between ml-4 py-4 px-2 shadow">
            <div className="flex">
                <div className="flex flex-col justify-center h-12 w-12 rounded-full bg-slate-200">
                    <div className="flex justify-center">H</div>
                </div>
                <div className="flex flex-col justify-center ml-2">
                    <h1>Harkirat Singh</h1>
                </div>
            </div>
            <div>
                <Button label="Send Money"/>
            </div>
        </div>
    )
}
export default UsersList