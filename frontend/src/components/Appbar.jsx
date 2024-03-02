import { useState } from "react"

function Appbar(params) {
    const [firstName , setFirstName] = useState("User")
    return(            
    <div className="shadow flex justify-between py-4">
        <div className="flex flex-col justify-center ml-4">
        <h1 className="font-bold text-xl">Payment App</h1>
        </div>
        <div className="flex">
        <div className="flex flex-col justify-center mr-4">
            <h1>Hello , {firstName}</h1>
        </div>
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                        {firstName[0]}
                </div>
            </div>
        </div>
    </div>
)
}
export default Appbar