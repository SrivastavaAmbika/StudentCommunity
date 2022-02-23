import React from 'react'
import {Avatar}  from '@material-ui/core';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import RateReviewIcon from '@material-ui/icons/RateReview';
// import RateReviewIcon from '@mui/icons-material/RateReview';
import './css/center.css';
import Post from './Post';
const center = () => {
  return (
    <div className='center'>
    <div className="center-input">
        <div className="center-form">
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTmEqZWbN_Tq2RNYBR-F7tmhAe5-IRHjUOvw&usqp=CAU"/>
        <form>
<input type="text" placeholder='Write Your View' />
<input type="submit" />

        </form>
        </div>
    
    <div className="center-option">
        <div className="option">
        <AddAPhotoIcon style={{color:'#e7a33e'}}/>
        <span>Photo</span>
        <VideoCallIcon style={{color:'#e7a45e'}}/>
        <span>video</span>
        <EmojiEventsIcon style={{color:'#e7a33e'}}/>
        <span>Events</span>
        <RateReviewIcon style={{color:'#e7a20e'}}/>
        <span>Write</span>
        </div>
        </div>
    </div>
    <Post name="Ambika" description="MCA Student" message="hello" photoUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTmEqZWbN_Tq2RNYBR-F7tmhAe5-IRHjUOvw&usqp=CAU" />
    <Post name="Ambika" description="MCA Student" message="hello" photoUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTmEqZWbN_Tq2RNYBR-F7tmhAe5-IRHjUOvw&usqp=CAU" />
    
    <Post name="Ambika" description="MCA Student" message="hello" photoUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTmEqZWbN_Tq2RNYBR-F7tmhAe5-IRHjUOvw&usqp=CAU" />
    
    <Post name="Ambika" description="MCA Student" message="hello" photoUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTmEqZWbN_Tq2RNYBR-F7tmhAe5-IRHjUOvw&usqp=CAU" />
    
    <Post name="Ambika" description="MCA Student" message="hello" photoUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTmEqZWbN_Tq2RNYBR-F7tmhAe5-IRHjUOvw&usqp=CAU" />
    
    <Post name="Ambika" description="MCA Student" message="hello" photoUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTmEqZWbN_Tq2RNYBR-F7tmhAe5-IRHjUOvw&usqp=CAU" />
    
    <Post name="Ambika" description="MCA Student" message="hello" photoUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTmEqZWbN_Tq2RNYBR-F7tmhAe5-IRHjUOvw&usqp=CAU" />
    
    </div>
  )
}

export default center;