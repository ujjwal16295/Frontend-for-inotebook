import React,{useState} from 'react'
import { useNavigate} from 'react-router-dom'


export const Signin = (props) => {
  let navigate=useNavigate()
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[name,setName]=useState("")
    const emailchange=(e)=>{
        setEmail(e.target.value)
    }
    const passwordchange=(e)=>{
        setPassword(e.target.value)
    }
    const namechange=(e)=>{
      setName(e.target.value)
  }
    const onsubmit=async(e)=>{
     e.preventDefault();
    const response=await fetch("http://localhost:5000/api/auth/createuser",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({email:email,password:password,name:name})
      })
         const json=await response.json()
         if(json.success){
            localStorage.setItem("token",json.authtoken)
            navigate("/")
            props.showAlert("here you go type your notes","success")
            
         }else{
            props.showAlert("ivalid credentials bro","warning")

         }



    }
  return (
    <div><form onSubmit={onsubmit}>
    <div class="mb-3">
      <label for="name" class="form-label">name</label>
      <input type="text" class="form-control" id="name" name='name' value={name} minLength={5} onChange={namechange} aria-describedby="emailHelp"/>
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email address</label>
      <input type="email" class="form-control" id="email" name='email' value={email} minLength={5} onChange={emailchange} aria-describedby="emailHelp"/>
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input type="password" class="form-control" id="password" name='password' minLength={5} onChange={passwordchange} value={password}/>
    </div>
    <button type="submit" class="btn btn-primary" >Submit</button>
  </form></div>
  )
}
