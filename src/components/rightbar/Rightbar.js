import "./rightbar.css";

import { Users } from "../../dummyData";
import Online from "../online/Online";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { buttonBaseClasses } from "@mui/material";
import { Add } from "@mui/icons-material";
import { Remove } from "@mui/icons-material";
import { axiosInstance } from "../../config";


export default function   Rightbar({ user }) {

  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setfriends] = useState([])
  const {user:currentUser,dispatch}=useContext(AuthContext)// current user is basicly deconstrucyting metghod,, checj notes, new name to user
  const [followed,setFollowed]=useState(currentUser.followins.includes(user?.id))
useEffect(()=>{
  
  setFollowed(currentUser.followins.includes(user?.id))// same as writing, user ? user.id
},[currentUser,user])




  useEffect(()=>{

    
    const getFriends=async ()=>{
      
      try{const friendList=await axiosInstance.get('/user/friends/'+ user._id )
      setfriends(friendList.data)}
      catch(err){
        console.log(err);

      }
      
     

    }
    
    getFriends()
   
    

  },[user]); 

  const handleClick=async()=>{
    try{
      if(followed){
        await axiosInstance.put('/user/'+user._id+'/unfollow',{userId:currentUser._id});
        dispatch({type:'UNFOLLOW',payload:user._id})
      }
      else{
        await axiosInstance.put('/user/'+user._id+'/follow',{userId:currentUser._id})
        dispatch({type:'FOLLOW',payload:user._id})
      }
    }
    catch(err){
      console.log(err);
    }
    setFollowed(!followed)

  }

  
 
  const HomeRightbar = () => {

    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday todayaetrgdfg.
          </span>
        </div>
        <img className="rightbarAd" src="/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
      {user.username!==currentUser.username && <button className="rightbarFollowButton" onClick={handleClick}>
        {followed ? 'Unfollow':'Follow'}
        {followed ? <Remove/>:<Add/>}
      </button>

      }
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">{user.relationship}</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">

          

            {friends.map((friend)=>(
              <Link to={'/profile/'+friend.username}>
              <div className="rightbarFollowing">
                <img
            src={
              user.coverPicture === ""
                ? PF + "/person/" + "/avatar.jpg"
                : PF + "/person/" + friend.profilePicture
            }
              alt=""
              className="rightbarFollowingImg"
            />
             <span className="rightbarFollowingName">{friend.username}</span>
             </div>
             </Link>

            ))}
            
           
       
          
          
          
          
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
