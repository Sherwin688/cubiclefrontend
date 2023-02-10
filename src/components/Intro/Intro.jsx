import "./Intro.css";
import { useEffect, useState } from "react";


const Intro = () => {
  

  return (
   <>
   <div className="filter"></div>
   <div className="intro-container">
    <h1 style={{color:"white"}}>Book Your Cubicle</h1>
    <div className="btn-container">
        <button className="signin" onClick={()=> window.location.href = '/register'}>Sign Up</button>
        <button className="loginbtn" onClick={()=> window.location.href = '/login'}>Login</button>
    </div>
</div>

   </>
)};

export default Intro;
