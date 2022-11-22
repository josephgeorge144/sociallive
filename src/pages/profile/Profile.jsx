import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../config";

export default function Profile() {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;

  const [user, setUser] = useState({})
 

   const params=useParams()
   console.log(params)



  useEffect(()=>{     
    const fetchData=async ()=>{
      const res=await axiosInstance.get(`/user?username=${params.username}`)
      setUser(res.data)
      console.log(`user is ${user}`)

    }
    fetchData ()
   
    

  },[params.username])


  return (
    
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                //  src={user.coverPicture==="" ? PF + "/person/1.jpeg" :user.profilePicture  }
                src={
                  user.coverPicture === ""
                    ? PF + "/person/" + "/avatar.jpg"
                    : PF + "/person/" + user.coverPicture
                }
                alt=""
              />
              <img
                className="profileUserImg"
                src={`${PF}/person/4.jpeg`}
                
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{user.username}</h4>
                <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={user.username}/>
            <Rightbar user={user}/>
          </div>
        </div>
      </div>
    </>
  );
}
