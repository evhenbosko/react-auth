import react,{useState} from'react'
import axios from'axios'
import Loader from './Loader'
import {Redirect} from'react-router-dom'



const SignUp=()=>{
  const [email,setEmail]  =useState('')
  const [password,setPassword]=useState('')
  const [load,setLoad]=useState(false)
  const [redirect,setRedirect]=useState(false)
      const submit= async(e)=>{
        e.preventDefault();
        setLoad(true)
        await
        axios.post('http://142.93.134.108:1111/sign_up',{email,password})
        .then((response)=> {
          setLoad(false)
         if (response.data.status==="Ok"){setRedirect(true)}
        else alert(response.data.message)
        ;})
        .catch( (error)=> {
        console.log(error)})
      }
    if (redirect){
      return (
      <Redirect to='login'/> )
    }
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
    <button    className="w-100 btn btn-lg btn-primary" 
                type="submit">Sign in</button>
    </form>
  )
}
export default SignUp