import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home(){
    const navigate = useNavigate()
    useEffect(() => {
      let token = localStorage.getItem('token');
      if(!token) navigate('/signin')
      else{
        axios.get(import.meta.env.VITE_BACKEND_URL + '/api/v1/user/me' , {
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