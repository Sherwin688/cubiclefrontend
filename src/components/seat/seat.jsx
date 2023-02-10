import "./seat.css";
import { useState } from "react";
import SelectDate from "./SelectDate";

const Seat = (props) => {
  const [isClicked,setIsClicked] = useState(false)
  const [DisplayAvailability,setDisplayAvailability] = useState(false)
  const seatColor = props.seatColor;
  let button;
if(seatColor ==1){
  button = <button onClick={()=> setIsClicked(true)} className="seat-selected"></button>
}
else{
  button = <button onClick={()=> setIsClicked(true)} className="seat-gray"></button>
}
 
  return (
    <>
    {DisplayAvailability && <div className="availability-modal"><div className="message">Seat is already booked</div><button onClick={()=>setDisplayAvailability(false)} className="close-modal">X</button></div>}
  {button}
   {isClicked && <div className="date-modal"><SelectDate/><button onClick={()=>setIsClicked(false)} className="close-modal">X</button></div>}
   </>
  );
};

export default Seat;
