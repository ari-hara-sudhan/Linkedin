import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import { auth } from './firebase'
import "./HeaderOptions.css"
function HeaderOptions({avatar, title,Icon}) {
    const user =useSelector(selectUser)
    return (
        <div className="headeroptions">
         {Icon && <Icon className="headeroptions__icon"/>}  
         {
             avatar && 
                 <Avatar onClick={()=>auth.signOut()} className="headeroptions__icon" src={avatar}/>
             
         } 
         <h3 className="headeroptions__title">{title}</h3>
        </div>
    )
}

export default HeaderOptions
