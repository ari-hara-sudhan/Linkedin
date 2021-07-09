import React, { useState } from 'react'
import "./Login.css"
import { Button } from '@material-ui/core'
import { auth, provider } from './firebase'
function Login() {
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const[name,setName]=useState()
    const[profile,setProfile]=useState()
    const signin=(e)=>{
      e.preventDefault();
      auth.signInWithPopup(provider)
      .catch((error)=>alert(error.message))
    }
    const register=()=>{

    }
    return (
        <div className="login">
           <div className="login__logo">
               <img src="https://www.bing.com/th?id=OIP.Ff1a2zx1DnGg5rppyqq-XwHaHa&w=105&h=105&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"/>
           </div>
            <form>
                <input value={name} onChange={e=>setName(e.target.value)} placeholder="Full name is {required}"
                type="text"
                />
                <input value={profile} onChange={e=>e.target.value} type="text" placeholder="Profile image url(optional)"/>
                <input value={email} onChange={e=>setEmail(e.target.value)} type="text" placeholder="Enter the email"/>
                <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Enter the password"/>
            <Button className="login__button" onClick={signin}>Sign In</Button>
            </form>
            <p>Not a memeber?<span className="login__register" onClick={register}>Register Now</span></p>
          
        </div>
    )
}

export default Login

