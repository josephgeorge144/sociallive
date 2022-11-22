import React, { useContext, useRef } from 'react'
import './share.css'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { AuthContext } from '../../context/AuthContext';
import { useState } from 'react';
import axios from 'axios';
import { Cancel } from '@mui/icons-material';
import { axiosInstance } from '../../config';



function Share() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const {user}=useContext(AuthContext)
    const desc=useRef()
    const [file,setFile]=useState(null)
    const submitHandler=async(e)=>{
        e.preventDefault()
        const newPost={
            userId:user._id,
            desc:desc.current.value
             
        }

        if(file){
            const data=new FormData();
           
            // const fileName=Date.now()+'allaa'+file.name;
            data.append('file',file)
            // data.append('name',fileName)
              
            // for (const value of data.values()) {
            //     console.log(value);
            //   }

            try{
               const response= await axiosInstance.post('/upload',data)
               console.log(response.data.cn)    
               newPost.img= response.data.cn


            }
            catch(err){
                console.log(err)
            }
        }
        try{
            console.log(newPost.img);
           await axiosInstance.post('/post',newPost)
           window.location.reload()

        }
        catch(err){
            console.log(err)
        }


    }
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img className='shareProfileImg' src={user.profilePicture === ""? PF + "/person/" + "/avatar.jpg" : PF + "/person/" + user.profilePicture
                }/>
                <input placeholder={`what do yo feel ${user.username}??`} type="text" className="shareInput" ref={desc} /> 
                 
            </div>
          
            <hr className="shareHr" />
            {file && (
            <div className='shareImgContainer'>
                <img className='shareImg'src={URL.createObjectURL(file)} alt=''/>
                <Cancel className='shareCancelImg' onClick={()=>setFile(null)}/>

            </div>
            )}
            <form className="shareBottom" onSubmit={submitHandler}>
                <div className="shareOptions">
                    <label htmlFor='file' className="shareOption">
                        <PermMediaIcon color="secondary" className='ShareIcon'/>
                        <span className='shareOptionText'>Photo</span>
                        <input style={{display:'none'}} type='file' id='file' accept='.png,.jpeg,.jpg' onChange={(e)=>setFile(e.target.files[0])}/>
                    </label>

                    <div className="shareOption">
                        <LabelIcon htmlColor='blue' className='ShareIcon'/>
                        <span className='shareOptionText'>Tag</span>
                    </div>
                    <div className="shareOption">
                        <LocationOnIcon className='ShareIcon'/>
                        <span className='shareOptionText'>Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotionsIcon color="primary"  className='ShareIcon'/>
                        <span className='shareOptionText'>Feelings</span>
                    </div>
                </div>
                <button type='submit' className="shareButton">Share</button>

            </form>

        </div>

   </div>
  )
}

export default Share