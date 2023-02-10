import axios from "axios";
import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [password,setPassword] = useState(null);
  const [confirmPassword,setConfirmPassword] = useState(null);
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
//   console.log(email,password);
//   let res = await fetch("https://cubical-backend-server.onrender.com/api/v1/entrance/login", {
//   method: "POST",
//   body: JSON.stringify({
//     email: email,
//     password:password
    
//   })
// }
// )
axios
    .post("https://cubical-backend-server.onrender.com/api/v1/entrance/login",{"email":email,"password":password})
    .then((response) => {
      console.log(response)
      localStorage.setItem("_token",response.data.result.token)

    })
    .catch((err) => console.log(err));
// axios.post("/login",{"email":email,"password":password}).then(op=>{
//   console.log(op)
// })
// console.log(res)
}
  return (
    <div class="login form">
    <header>Login</header>
    <form action="#">
    <input type="email" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Enter your email" id="email"/>
    <input type="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Create a password" id="password"/>
      <a href="#">Forgot password?</a>
      <input type="submit" class="button" onChange = {(e) => handleInputChange(e)} onClick={(e)=>handleSubmit(e)}  value="Login"/>

    </form>
    <div class="signup">
      <span class="signup">Don't have an account?
       <label for="check">Signup</label>
      </span>
    </div>
  </div>
  
  );
};

export default Login;
