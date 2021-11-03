import React from 'react'
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search"
import HomeIcon from "@material-ui/icons/Home"
import FlagIcon from "@material-ui/icons/Flag"
import  SubscriptionsOutlinedIcon  from '@material-ui/icons/SubscriptionsOutlined'
import  StorefrontOutlinedIcon  from '@material-ui/icons/StorefrontOutlined'
import  SupervisedUserCircleIcon  from '@material-ui/icons/SupervisedUserCircle'
import { Avatar, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from '@material-ui/icons/Forum'
import  NotificationsActiveIcon  from '@material-ui/icons/NotificationsActive'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

function Header() {
    return (
        <div className="header">
            <div className="header__left">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt=""/>
               <div className="header__input">
                   <SearchIcon />
                   <input type="text" placeholder="Search" />
               </div>
            </div>
            <div className="header__center">
               <div className="header__option header__option--active">
                   <HomeIcon fontSize="large" />
               </div>
               <div className="header__option">
                   <FlagIcon fontSize="large" />
               </div>
               <div className="header__option">
                   <SubscriptionsOutlinedIcon fontSize="large" />
               </div>
               <div className="header__option">
                   <StorefrontOutlinedIcon fontSize="large" />
               </div>
               <div className="header__option">
                   <SupervisedUserCircleIcon fontSize="large" />
               </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar src="https://scontent.fhan3-4.fna.fbcdn.net/v/t1.6435-9/89951757_1057569771273040_1808126200200036352_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=bx_RR5BWugEAX_94Kjp&tn=TlW7obSw9K3IxkR8&_nc_ht=scontent.fhan3-4.fna&oh=3679f03559f0517403694b8b72b3b316&oe=61610492"/>
                    <h4>Bach Dang Dung</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>
                
                <IconButton>
                <a href="https://www.messenger.com/t/100018646955573/">
                    <ForumIcon  />
                  </a>  
                </IconButton>
                
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
