import axios from "axios";
import { useState } from "react";
import "./Login.css";
import {useNavigate} from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleInputChange = (e) => {
    const {id , value} = e.target;
    if(id === "email"){
        setEmail(value);
    }
    if(id === "password"){
        setPassword(value);
    }
  

}
const handleSubmit  = async(e) => {
  e.preventDefault();

axios
    .post("loginUser",{"email":email,"password":password})
    .then((response) => {
      console.log(response)
      localStorage.setItem("_token",response.data.result.token)
      navigate('/home');
    })
    .catch((err) => console.log(err));

}
  return (
    <div className="form-container">
    <div className="login form">
    <header>Login</header>
    <form>
    <input type="email" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Enter your email" id="email"/>
    <input type="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Create a password" id="password"/>
      <a href="">Forgot password?</a>
      <input type="submit" className="button" onChange = {(e) => handleInputChange(e)} onClick={(e)=>handleSubmit(e)}  value="Login"/>

    </form>
    <div className="signup">
      <span className="signup">Don't have an account?
       <label htmlFor="check" onClick={()=>navigate("/register")}>Signup</label>
      </span>
    </div>
  </div>
  </div>
  
  );
};

export default Login;
