import React from 'react'
import Share from '../Share/Share'
import './feed.css'
import { Icon ,HomeIcon} from '@mui/material'
import Post from '../post/Post'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { axiosInstance } from '../../config'
//  import {Posts} from '../../dummyData'


export default function Feed({username}) {
  const [posts, setPosts] = useState([])
  const {user}=useContext(AuthContext)
 

 
  useEffect(()=>{
    const fetchData=async ()=>{
      const res=username ? await axiosInstance.get(`/post/profile/${username}`) : await axiosInstance.get(`/post/timeline/${user._id}`)
     
      setPosts(res.data.sort((p1,p2)=>{
        return new Date(p2.createdAt)-new Date(p1.createdAt)
      }))
      console.log(res.data )

    }
    fetchData()
   
    

  },[username,user._id])

  
  
  return (
    <div className='feed'>
      <div className="feedWrapper">
        {(!username||username===user.username) && <Share />}
      
        {posts.map((itm)=>{
           return(
            <Post key={itm._id} post={itm}/>
            
           )
        }
        )}
       
        
     


      </div>
      
      </div>
  )
}
