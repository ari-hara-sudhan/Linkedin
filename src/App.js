import React, { useEffect, useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import "./App.css"
import Feed from "./Feed"
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from './features/userSlice'
import Login from "./Login"
import { auth } from './firebase'
function App() {
  const user =useSelector(selectUser)
  const dispatch=useDispatch()
  useEffect(()=>{
    auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        dispatch(login({
          email:userAuth.email,
          uid:userAuth.uid,
          displayName:userAuth.displayName,
          photo:userAuth.photoURL,

        }))
        
      }else{
        dispatch(logout())
      }

    })
 

  },[])
  return (
    <div className="app">
      <Header/>

      {!user ?(
        <Login/>
      ):(

        <div className="app__body">
        <Sidebar/>
        <Feed/>

      </div>
      )
      }

    </div>
  )
}

export default App
