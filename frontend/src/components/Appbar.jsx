import axios from "axios";
import { useEffect, useState } from "react"

function Appbar() {
    const [firstName , setFirstName] = useState("User")
    useEffect(() => {
        let token = localStorage.getItem('token');
        if(!token) navigate('/signin')
        else{
          axios.get('https://verbose-broccoli-5pvjppgwgr4fv5xv-3000.app.github.dev/api/v1/user/me' , {
            headers:{
              authorization: "Bearer " + token
            }
          }).then((res) => {
            if(res.status == 200){
                setFirstName(res.data.firstName)
            }
            else navigate('/signin')
          })
        }
      } , [])
    return(            
    <div className="shadow flex justify-between py-4">
        <div className="flex flex-col justify-center ml-4">
        <h1 className="font-bold text-xl">Payment App</h1>
        </div>
        <div className="flex">
        <div className="flex flex-col justify-center mr-4">
            <h1>Hello , {firstName}</h1>
        </div>
        <a href="/profile">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                        {firstName[0]}
                </div>
            </div>
        </a>
        </div>
    </div>
)
}
export default Appbar