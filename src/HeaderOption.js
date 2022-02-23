import React from 'react';
import {Avatar} from '@material-ui/core';
import "./css/Header.css";

const HeaderOption = ({Icon,title,avatar}) => {
    return (
        <div className="headeroption">
        {
             Icon &&  <Icon></Icon> 
           
        }
        
        {
            avatar && <Avatar name={avatar} />
        }
           
           {title}
        </div>
    )
}

export default HeaderOption
