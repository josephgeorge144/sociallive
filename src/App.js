import Home from "./pages/home/home";
import Profile from "./pages/profile/Profile";
import { Routes, Route, Link, Navigate } from "react-router-dom";

import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const {user} = useContext(AuthContext)
  console.log('thedat is');
  console.log(user)


  return (
    <div>
    



      <Routes>
      <Route path="/" element={user ? <Home />: <Register/>}></Route>
        <Route path="/profile/:username" element={<Profile />}></Route>
        <Route path="/login" element={user?<Navigate to="/"/>:<Login />}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </div>
  );
}

export default App; 
