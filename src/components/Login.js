import react,{useState} from'react'
import axios from'axios'
import {Redirect} from'react-router-dom'
import Loader from './Loader'




const Login=()=>{
  const [email,setEmail]  =useState('')
  const [password,setPassword]=useState('')
  const [load,setLoad]=useState(false)
  const [redirect,setRedirect]=useState(false)
  
  const submit=async(e)=>{
      e.preventDefault();
      setLoad(true)
  await
  axios.post('http://142.93.134.108:1111/login?email='+email+'&'+'password='+password,{email,password},{withCredential:true})
.then((response)=> 
{
  setLoad(false)
    localStorage.setItem('accessToken',response.data.body.access_token)
    localStorage.setItem('refreshToken',response.data.body.refresh_token)
if (response.data.statusCode===200){setRedirect(true)}
else{ alert(response.data.body.message)
  localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')

}
})
.catch((error)=> {
  console.log(error);
});
    }
    if (redirect){return (<Redirect to='/'/> )}
   return (
  <form onSubmit={submit}>
      {load &&<p><Loader/></p>} 
      <div className="form-floating">
      <input  type="email" 
              className="form-control" 
              id="floatingInput" 
              placeholder="name@example.com"
              onChange={e=>setEmail(e.target.value)}/>
      
    </div>
    <div className="form-floating">
      <input  type="password" 
              className="form-control" 
              id="floatingPassword" 
              placeholder="Password"
              onChange={e=>setPassword(e.target.value)}/>
    
    </div>
    <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
  </form>
)
}
export default Login