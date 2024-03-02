import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home(){
    const navigate = useNavigate()
    useEffect(() => {
      let token = localStorage.getItem('token');
      if(!token) navigate('/signin')
      else{
        axios.get('https://verbose-broccoli-5pvjppgwgr4fv5xv-3000.app.github.dev/api/v1/user/me' , {
          headers:{
            authorization: "Bearer " + token
          }
        }).then((res) => {
          if(res.status == 200) navigate('/dashboard')
          else navigate('/signin')
        })
      }
    } , [])

    return(
        <>
        </>
    )
}
export default Home