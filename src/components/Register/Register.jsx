import { useState } from "react";
import axios from "axios";
import "./Register.css";

const Register = () => {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [password,setPassword] = useState(null);
  const [confirmPassword,setConfirmPassword] = useState(null);
  const handleInputChange = (e) => {
    const {id , value} = e.target;
    if(id === "username"){
        setUsername(value);
    }
    if(id === "phoneNumber"){
      setPhoneNumber(value);
  }
   
    if(id === "email"){
        setEmail(value);
    }
    if(id === "password"){
        setPassword(value);
    }
    if(id === "confirmPassword"){
        setConfirmPassword(value);
    }

}
const handleSubmit  = async(e) => {
  e.preventDefault();
  console.log(username,phoneNumber,email,password,confirmPassword);
  axios
    .post("http://localhost:1337/api/v1/entrance/create",{"passwordConfirm":confirmPassword,"username":username,"phoneNumber":phoneNumber,"email":email,"password":password})
    .then((response) => {
      console.log(response)
    })
    .catch((err) => console.log(err));
}
  return (
    
    <div class="registration form">
    <header>Signup</header>
    <form action="#">
      <input type="text" value={username} onChange = {(e) => handleInputChange(e)} placeholder="Enter your Username" id="username"/>
      <input type="email" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Enter your email" id="email"/>
      <input type="text" value={phoneNumber} onChange = {(e) => handleInputChange(e)} placeholder="Enter your Phone Number" id="phoneNumber"/>
      <input type="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Create a password" id="password"/>
      <input type="password" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm your password" id="confirmPassword"/>
      <input type="submit" class="button" onChange = {(e) => handleInputChange(e)} onClick={(e)=>handleSubmit(e)}  value="Sign Up"/>

    </form>
    <div class="signup">
      <span class="signup">Already have an account?
       <label for="check">Login</label>
      </span>
    </div>
  </div>
  
  );
};

export default Register;
