import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'

export const Login = (props) => {
    let navigate=useNavigate()
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const emailchange=(e)=>{
        setEmail(e.target.value)
    }
    const passwordchange=(e)=>{
        setPassword(e.target.value)
    }
    const onsubmit=async(e)=>{
     e.preventDefault();
    const response=await fetch("https://backend-for-inotebook.onrender.com/api/auth/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({email:email,password:password})
      })
         const json=await response.json()
         if(json.success){
            localStorage.setItem("token",json.authtoken)
            navigate("/")
            props.showAlert("here you go type your notes","success")

            
         }else{
          props.showAlert({message:"invalid credentials",type:"danger"})

        }

    }
  return (
    <div><form onSubmit={onsubmit}>
    <div class="mb-3">
      <label for="email" class="form-label">Email address</label>
      <input type="email" class="form-control" id="email" name='email' value={email} onChange={emailchange} minLength={5} aria-describedby="emailHelp"/>
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input type="password" class="form-control" id="password" name='password' onChange={passwordchange} minLength={5} value={password}/>
    </div>
    <button type="submit" class="btn btn-primary" >Submit</button>
  </form></div>
  )
}
