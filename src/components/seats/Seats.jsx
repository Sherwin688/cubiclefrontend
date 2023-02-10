import "./Seats.css";
import axios from "axios";
import Seat from "../seat/seat";
import { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";


const Seats = () => {
  
  const [cubicles,setCubicles] = useState([])

  const fetchData = async() => {
    axios
    .get("https://cubical-backend-server.onrender.com/api/v1/entrance/cubical",{headers:{"Authorization":`Bearer ${localStorage.getItem("_token")}`}})
    .then((response) => {
      console.log(response)
    })
    .catch((err) => console.log(err));
    
  }

  const cubes = cubicles.map((cubicle,index)=>{
    if(index>10){
      return
    }
        return <Seat key={index} id={cubicle.id} seatColor={Math.floor(Math.random() * (2 - 0 + 1)) + 0}/>
    
  })

   
  useEffect(() => {
    fetchData();
  },[])


  return (<>
  <Navbar/>
  <h1 className="bookings">Bookings</h1>
  <div className="main-container">
    <div className="seat-container">
    {cubes}
    </div>
    </div>
   </>);
};

export default Seats;
