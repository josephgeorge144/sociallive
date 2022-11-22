 import { useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { CircularProgress } from "@mui/material";

export default function Login() {

   const email = useRef()
   const password = useRef()
   const {user,isFetching,error,dispatch}=useContext(AuthContext)

  const handleClick=(e)=>{
    e.preventDefault()
    loginCall({email:email.current.value,password:password.current.value},dispatch)
   

  }
  console.log(user);

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">JGVenmeli</h3>
          <span className="loginDesc">
          Connect with friends and the world around you on JGVenmeli social app, An altranative for Facebook.
          </span>
        </div>
        <div className="loginRight">

          <form  onSubmit={handleClick}className="loginBox">
            <input placeholder="Email" className="loginInput" type='email'required ref={email} />
            <input placeholder="Password" className="loginInput"minLength='2' type="password" required ref={password}/>
            <button type="submit" className="loginButton" disabled={isFetching}>{isFetching?<CircularProgress color="primary"/>:'Log In'}</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton" disabled={isFetching}>
            {isFetching?<CircularProgress color="primary"/>:'Create a New Account '}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
