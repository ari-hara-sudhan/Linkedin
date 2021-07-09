import React, { useState } from 'react'
import "./Login.css"
import { Button } from '@material-ui/core'
import { auth} from './firebase'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'
function Login() {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[name,setName]=useState("")
    const[profile,setProfile]=useState("")
    const dispatch=useDispatch()
    const signin=(e)=>{
      e.preventDefault();
      
    }
    
    const register=()=>{
        if(!name){
            return alert ("please enter the full name")
        }
        
        auth.createUserWithEmailAndPassword(email,password).then(
            (userAuth)=>{
                userAuth.user
                .updateProfile({
                    displayName:name,
                    photoURL:profile
                })
                .then(()=>{
                    dispatch(login({
                        email:userAuth.user.email,
                        uid:userAuth.user.uid,
                        displayName:name,
                        photoURL:profile

                    }))
                })
            }
        ).catch((error)=>alert(error.message))
    }
    
    return (
        <div className="login">
           <div className="login__logo">
               <img src="https://www.bing.com/th?id=OIP.Ff1a2zx1DnGg5rppyqq-XwHaHa&w=105&h=105&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" alt="image"/>
           </div>
            <form>
                <input
                placeholder="Enter the full name"
                value={name}
                type='text'
                onChange={e=>setName(e.target.value)}
                 />
                <input 
                placeholder="enter the profile (optional) "
                value={profile}
                onChange={e=>setProfile(e.target.value)}
                />
                <input
                placeholder="enter the email"
                type="email"
                value={email}
                onChange={e=>setEmail(e.target.value)}
                 />
                <input 
                placeholder="enter the password"
                type="password"
                value={password}
                onChange={e=>setPassword(e.target.value)}
                />
              
              
            <Button type='submit' className="login__button" onClick={signin}>Sign In</Button>
            <p>Not a memeber?<span className="login__register" onClick={register}>Register Now</span></p>
            </form>

          
        </div>
    )
}

export default Login

