import React from 'react';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';


const Header: React.FC = () => {
   
  return (
    <div>
      <div className="nav">
        <div className="left">
            <h4>
              Job  interview with Recruiter
            </h4>
            <small>Recruiter</small>
        </div>
        <div className="right">
            <div className="notification">
               <NotificationsNoneSharpIcon/>
            </div>
            <div className="profile">
                <div className="img">
                    img
                </div>
                <div className="name">
                    <p>Recruiter</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
