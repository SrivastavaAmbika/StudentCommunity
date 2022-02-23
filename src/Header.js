import React from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MessageIcon from '@material-ui/icons/Message';
import PeopleIcon from '@material-ui/icons/People';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import {Avatar} from '@material-ui/core';
import "./css/Header.css";
import logo from "./image/y.png";
// import Home from './Home';
// import Event from './Event';
import HeaderOption from './HeaderOption';
// import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div className="header">
           <div className="header_left">
               <div className="header_logo">
                   <img src={logo} alt="" />
               </div>
               <div className="header_search">
<SearchIcon />
<input type="text" placeholder="Search" />
               </div>
           </div> 
           <div className="header-right">
           
               <HeaderOption Icon={HomeIcon}  title="Home" />
               
               <HeaderOption Icon={PeopleIcon } title="Community" />
               <HeaderOption Icon={EmojiEventsIcon} title="Events"  />
               <HeaderOption Icon={MessageIcon} title="Messaging" />
               <HeaderOption Icon={NotificationsIcon} title="Notifications" />
               <HeaderOption avatar={Avatar } title="Ambika"  />
              
           </div>
        </div>
    )
}

export default Header;
