import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../config";
import "./register.css";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const naviagte=useNavigate()
  const handleClick = async (e) => {
    e.preventDefault();
    console.log(password.current.value);
    console.log(passwordAgain.current.value);
    console.log("S");

    if (passwordAgain.current.value !== password.current.value) {
      password.current.setCustomValidity("password dont match! ");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try{
        await axiosInstance.post('/auth/reg',user)
        naviagte('/login')
        
      }
      catch(err){
        console.log(err)
    }}
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">JgVenmeli</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on JGVenmeli social app, An altranative for Facebook.
          </span>
        </div>
        <div className="loginRight">
          <form onSubmit={handleClick} className="loginBox">
            <input
              placeholder="Username"
              className="loginInput"
              required
              ref={username}
            />
            <input
              placeholder="Email"
              className="loginInput"
              required
              ref={email}
              type="email"
            />
            <input
              placeholder="Password"
              className="loginInput"
              required
              ref={password}
              type="password"
              minLength="4"
            />
            <input
              placeholder="Password Again"
              className="loginInput"
              required
              ref={passwordAgain}
              minLength="4"
              type="password"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton" type="submit">
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
