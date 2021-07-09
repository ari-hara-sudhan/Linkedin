import React from 'react'
import "./Posts.css"
import { Avatar } from '@material-ui/core'
import InputOptions from './InputOptions'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatOutlinedIcon from "@material-ui/icons/Chat"
import ShareOutlinedIcon from "@material-ui/icons/Share"
import SendOutlinedIcon from "@material-ui/icons/Send"


function Posts({name,desc,message,photo,timestamp}) {
    return (
        <div className="post">
            <div className="post__header">
            <Avatar/>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{desc}</p>
            </div>
           
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__buttons">
                <InputOptions Icon={ThumbUpAltIcon} title="Like" color="gray"/>
                <InputOptions Icon={ChatOutlinedIcon} title="Comment" color="gray"/>
                <InputOptions Icon={ShareOutlinedIcon} title="Like" color="gray"/>
                <InputOptions Icon={SendOutlinedIcon} title="Like" color="gray"/>

            </div>
     
        </div>
    )
}

export default Posts
