import "./Seats.css";
import axios from "axios";
import Seat from "../seat/seat";
import { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";


const Seats = () => {
  
  const [cubicles,setCubicles] = useState([])

  const fetchData = async() => {
    axios
    .get("/getCubicleList",{headers:{"Authorization":`Bearer ${localStorage.getItem("_token")}`}})
    .then((response) => {
      setCubicles(response.data.result)
    })
    .catch((err) => console.log(err));
    
  }

  const cubes = cubicles.map((cubicle,index)=>{
  //  console.log(cubicle.status);
        return <Seat key={index} id={cubicle.id} seatColor={cubicle.cubicalStatus?"1":"0"}/>
    
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
