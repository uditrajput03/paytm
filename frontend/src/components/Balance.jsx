import axios from "axios"
import { useEffect, useState } from "react"

function Balance(){
    const [bal , setBal] = useState(0)
    useEffect(()=> {
        axios.get('https://verbose-broccoli-5pvjppgwgr4fv5xv-3000.app.github.dev/api/v1/account/balance' , {
            headers:{
                authorization: "Bearer " + localStorage.getItem('token')
            }
        }).then((res) => {
            if(res.data.balance){
                setBal(res.data.balance.toFixed(2))
            }
        })
    } , [])
    return (
        <div className="flex font-bold text-xl shadow ml-4 py-4">
            <h1>Your Balance: Rs {bal}</h1>
        </div>
    )
}
export default Balance