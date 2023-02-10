import { useState } from "react"
import Register from "../Register/Register"
import "./navbar.css"
// import Logo from "./logo.png"


const Navbar = () => {
const [showRegister,setShowRegister] = useState(false)
const [showLogin,setShowLogin] = useState(false)
  return (
    <>
    <div className="navbar">
      <div className="navContainer">
        {/* <span className="logo"> <Logo/></span> */}
        <div className="navItems">
          <button className="navButton" onClick={()=> window.location.href = '/register'}>Register</button>
          <button className="navButton" onClick={()=> window.location.href = '/login'}>Login</button>
        </div>
      </div>
    </div>
    {showRegister && <Register/>}
    
    </>
  )
}

export default Navbar