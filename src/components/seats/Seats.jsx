import "./Seats.css";
import axios from "axios";
import Seat from "../seat/seat";
import { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import DateTimePicker from 'react-datetime-picker';



const Seats = () => {
  
  const [cubicles,setCubicles] = useState([])
  const [valueStart, onChangeStart] = useState(new Date());
  const [valueEnd, onChangeEnd] = useState(new Date());
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(valueStart)
    console.log(valueEnd)
    
  
   }
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
  <div className="searchbar">
  <DateTimePicker  onChange={onChangeStart} value={valueStart} placeholder="startDate" />
  <DateTimePicker  onChange={onChangeEnd} value={valueEnd} placeholder="endDate" />
 
  <button onClick={(e)=>handleSubmit(e)}>Search</button>
    
  </div>
  <h1 className="bookings">Bookings</h1>
  <div className="main-container">
    <div className="seat-container">
    {cubes}
    </div>
    </div>
   </>);
};

export default Seats;
