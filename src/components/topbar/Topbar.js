import React, { useContext } from "react";
import './topbar.css'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";
import { avatarClasses } from "@mui/material";



function Topbar() {
  const PF= process.env.REACT_APP_PUBLIC_FOLDER
  const {user}=useContext(AuthContext)
  console.log('topbar');
  return (
    <div className="topbarConatiner">
      <div className="topbarLeft">
        <Link to='/' style={{textDecoration:"none"}}>
        <span className="logo">JG Venmeli</span>
        </Link>"
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <SearchOutlinedIcon className="searchicon" />
          <input type="text" className="searchInput" placeholder="type name or place" />
        </div>
      </div>
      <div className="topbarRight">
      
        <div className="topbarLinksa">
            
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <ChatBubbleIcon />
            <span className="topbarIconBadge">1</span>
          </div>

          <div className="topbarIconItem">
            <NotificationsNoneOutlinedIcon />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
        <img className="topbarImg" src={user.profilePicture==="" ? PF+ "/person/"+"/avatar.jpg" : PF + "/person/" + user.profilePicture} />
        
        </Link>
        <span className="topbarname"><h5>{user.username}</h5></span>
        
      </div>
    </div>
  );
}

export default Topbar;
