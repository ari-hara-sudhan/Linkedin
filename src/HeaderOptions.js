import { Avatar } from '@material-ui/core'
import React from 'react'
import "./HeaderOptions.css"
function HeaderOptions({avatar, title,Icon}) {
    return (
        <div className="headeroptions">
         {Icon && <Icon className="headeroptions__icon"/>}  
         {
             avatar && 
                 <Avatar className="headeroptions__icon" src={avatar}/>
             
         } 
         <h3 className="headeroptions__title">{title}</h3>
        </div>
    )
}

export default HeaderOptions
