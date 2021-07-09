import React from 'react'
import "./Sidebar.css"
import { Avatar } from '@material-ui/core'
function Sidebar() {

  
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://www.bing.com/th?id=OIP.oQrwe9C2KzfEoNtmuU_clQHaEo&w=183&h=110&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" alt="user"/>
                <Avatar className="sidebar__avatar"/>
                <h3>ahs dev</h3>
                <h4>ahshari2003@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who Viewed you</p>
                    <p className="sidebar__statNumber">2.3</p>

                </div>
                <div className="sidebar__stat">
                <p>Views on post</p>
                <p className="sidebar__statNumber">2.3</p>
              
            </div>
        
            </div>

            <div className="sidebar__bottom">
            <h3>Recent</h3>
            <div className="sidebar__recent">
            <p><span className="sidebar__hash">#</span>programming</p>
            <p><span className="sidebar__hash">#</span>react.js</p>
            <p><span className="sidebar__hash">#</span>softwareEnginner</p>
            <p><span className="sidebar__hash">#</span>developer</p>

        </div>

            </div>
        </div>
    )
}

export default Sidebar
