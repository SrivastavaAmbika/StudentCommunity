import React from 'react';
import './css/sidebar.css';
import { Avatar } from '@material-ui/core';
const Sidebar = () => {
    return (
        <>
         <div className="sidebar">
         <div className="slidebar_profile">

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQjSTsiwQtbxXopkG1cFHl75cpKoCTpimsiQ&usqp=CAU" alt="" />
<Avatar />
<div className="profile_detail">
<h4>Ambika</h4>
    <p>MCA Student</p>
    <p>Bhai Parmanad Institue Of Technology</p>


</div>
<div className="profile_stat">
    <span ></span>
    <span className="profile_statA"></span>
</div>
<div className="profile_stat">
    <span > <br/> <b></b> </span>
    <span className="profile_statA"></span>
</div>
    </div>
    
         </div> 
          
        </>
    )
}

export default Sidebar
