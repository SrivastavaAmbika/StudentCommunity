import React from 'react';
import './css/RightSidebar.css';
// import { Avatar } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
const RightSidebar = () => {
    return (
        <>
         <div className="rightside">
          <div className="rightsidetop">
              <div className="rightsideheader">
                  <h4>News</h4>
                  <InfoIcon />
              </div>
              <div className="newsBody">
                  <ul className="bodyoption">
                      <li><h4>Lorem, ipsum dolor.</h4>
                       <p>Lorem ipsum dolor sit amet consectetur.</p> 
                       </li>
                      <li>
                      <h4>Lorem, ipsum dolor.</h4>
                       <p>Lorem ipsum dolor sit amet consectetur.</p> 
                      </li>
                      <li>
                      <h4>Lorem, ipsum dolor.</h4>
                       <p>Lorem ipsum dolor sit amet consectetur.</p> 
                      </li>
                      <li>
                      <h4>Lorem, ipsum dolor.</h4>
                       <p>Lorem ipsum dolor sit amet consectetur.</p> 
                      </li>
                      <li>
                      <h4>Lorem, ipsum dolor.</h4>
                       <p>Lorem ipsum dolor sit amet consectetur.</p> 
                      </li>
                  </ul>
              </div>
          </div>
          <div className="rightsidebottom">
              <div className="rightsideheader">
                  <h4>News</h4>
                  <InfoIcon />
              </div>
              <div className="newsBody">
                  <ul className="bodyoption">
                      <li><h4>Lorem, ipsum dolor.</h4>
                       <p>Lorem ipsum dolor sit amet consectetur.</p> 
                       </li>
                      <li>
                      <h4>Lorem, ipsum dolor.</h4>
                       <p>Lorem ipsum dolor sit amet consectetur.</p> 
                      </li>
                      <li>
                      <h4>Lorem, ipsum dolor.</h4>
                       <p>Lorem ipsum dolor sit amet consectetur.</p> 
                      </li>
                      <li>
                      <h4>Lorem, ipsum dolor.</h4>
                       <p>Lorem ipsum dolor sit amet consectetur.</p> 
                      </li>
                      <li>
                      <h4>Lorem, ipsum dolor.</h4>
                       <p>Lorem ipsum dolor sit amet consectetur.</p> 
                      </li>
                  </ul>
              </div>
          </div>
         
         </div> 
          
        </>
    )
}

export default RightSidebar;
