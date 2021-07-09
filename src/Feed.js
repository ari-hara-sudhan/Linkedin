import React, { useEffect, useState } from 'react'
import "./Feed.css"
import CreateIcon from "@material-ui/icons/Create"
import InputOptions from './InputOptions'
import ImageIcon from "@material-ui/icons/Image"
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Posts from './Posts'
import db from './firebase'
import firebase from "firebase"
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
function Feed() {
    const[input,setInput]=useState()
    const[posts,setPosts]=useState([])
    const user =useSelector(selectUser)

    useEffect(()=>{
        db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot=>{
            setPosts(snapshot.docs.map(doc=>({
                id:doc.id,
                data:doc.data()
            })))
        })
    },[])

    const sendPost=(e)=>{
        e.preventDefault();
        db.collection("posts").add({
            name:user.displayName,
            desc:user.email,
            message:input,
            photo:user.photo,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput("");
    }
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form>
                        <input value={input} onChange={e=>setInput(e.target.value)} type="text"/>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>

                </div>
                <div className="feed__inputOptions">

                <InputOptions Icon={ImageIcon} title="photo" color="#70B5f9"/>
                    <InputOptions Icon={SubscriptionsIcon} title="video" color="#E7A33E"/>
                    <InputOptions Icon={EventNoteIcon} title="Event" color="#C0CBCD"/>
                    <InputOptions Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E"/>

                </div>

            </div>
            <div className="feed__posts">
                {
                    posts.map(({id,data})=>(
                        <Posts 
                        name={data.name}
                        desc={data.desc}
                        message={data.message}
                        photo={data.photo}
                        timestamp={data.timestamp}
    
                    />

                    ))
                }
                     
            

            </div>
            
        </div>
    )
}

export default Feed
