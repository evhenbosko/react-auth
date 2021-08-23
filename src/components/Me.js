import React,{useContext,useState} from 'react'
import axios from'axios'
import Loader from './Loader'
const Me=()=>{
   
    const [load,setLoad]=useState(false)
    const [log,setLog]=useState('Need authorization')
    const res=async(e)=>{
        setLoad(true)
        axios.interceptors.response.use((res)=>{
            if (res.data.body.message==='token expired'){
             axios({
                    method: "post",
                    url: "http://142.93.134.108:1111/refresh",
                    headers: { Authorization: `Bearer ${localStorage.getItem('refreshToken')}` },
                    
                  })
                  .then ((res)=>{
                    setLoad(false)
                    localStorage.setItem('accessToken',res.data.body.access_token)
                  localStorage.setItem('refreshToken',res.data.body.refresh_token)
                  axios.get("http://142.93.134.108:1111/me",{headers:{Authorization:'Bearer '+localStorage.getItem('accessToken')}})
                  setLog(res.data.body.message)
                })
                  .catch( (error)=> {
                    console.log(error);
                    
                  })    
              }
            else 
            {
               setLoad(false) 
                setLog(res.data.body.message)
          
              }
            return res
        })
      await  axios.get("http://142.93.134.108:1111/me",{headers:{Authorization:'Bearer '+localStorage.getItem('accessToken')}})
    }
 
    return (

<div onClick={res} >
          {load &&<p><Loader/></p>} 
        
<h2>Token status:{log}</h2>
        </div>
)
}
export default Me



