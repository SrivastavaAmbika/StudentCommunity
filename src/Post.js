import React from 'react'
import {Avatar}  from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import './css/post.css';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
const Post = ({name,description,message,photoUrl}) => {
  return (
    <div className='posts'>
    
    <div className="postheader">
<div className="postheaderleft">
<Avatar src={photoUrl}/>
    <div className="profiledetail">
    
        <h3>{name}</h3>
        <p>{description}</p>
    </div>
</div>

<MoreHorizIcon  style={{color:'#e7a20e'}} />
</div>
<div className="postbody">
    <p>{message}</p>
</div>
<div className="postfooter">
    <div className="footeroption">
<ThumbUpIcon  style={{color:'#e7a20e'}} />
<span> 
upvote
</span>

    </div>
    <div className="footeroption">
    <ThumbDownIcon  style={{color:'#e7a20e'}} />
<span> 
downvote
</span>

    </div>
    <div className="footeroption">
    <CommentIcon  style={{color:'#e7a20e'}} />
<span> 
comment
</span>

    </div>
    <div className="footeroption">
    <ShareIcon  style={{color:'#e7a20e'}} />
<span> 
share
</span>

    </div>
    <div className="footeroption">
    <SendIcon  style={{color:'#e7a20e'}} />
<span> 
send
</span>

    </div>

</div>
<div className="postheaderright">

</div>

    
    </div>
  )
}

export default Post;