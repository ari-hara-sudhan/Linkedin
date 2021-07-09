import React from 'react'
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search"
import HeaderOptions from './HeaderOptions'
import HomeIcon from "@material-ui/icons/Home"
import SupervisorAccontIcon from "@material-ui/icons/SupervisorAccount"
import BusinessCenterIcon from "@material-ui/icons/Business"
import ChatIcon from "@material-ui/icons/Chat"
import NotificationIcon from "@material-ui/icons/NotificationImportant"
function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://www.bing.com/th?id=OIP.Ff1a2zx1DnGg5rppyqq-XwHaHa&w=105&h=105&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" alt="linkedin"/>

                <div className="header__search">
                 <SearchIcon/>
                 <input type="text"/>
                </div>
            </div>
            <div className="header__right">
            <HeaderOptions
            title="Home" Icon={HomeIcon}
            />
             <HeaderOptions
            title="My Network" Icon={SupervisorAccontIcon}
            />
                 <HeaderOptions
            title="Jobs" Icon={BusinessCenterIcon}
            />
                 <HeaderOptions
            title="Messaging" Icon={ChatIcon}
            />
                 <HeaderOptions
            title="Notification" Icon={NotificationIcon}
            />
                 <HeaderOptions
            avatar="https://www.bing.com/th?id=OIP.6nCVjA0S936UiBlDUsov4QAAAA&w=144&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" title="ahs dev"
            />
            </div>
        </div>
    )
}

export default Header
