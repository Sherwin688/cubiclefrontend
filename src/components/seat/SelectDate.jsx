import "./SelectDate.css";
import { useState } from "react";
import DateTimePicker from 'react-datetime-picker';
const SelectDate = (props) => {
  const [valueStart, onChangeStart] = useState(new Date());
  const [valueEnd, onChangeEnd] = useState(new Date());
 

 const handleSubmit = (e)=>{
  e.preventDefault();
  console.log(valueStart)
  console.log(valueEnd)
  

 }
  return (
    <div className="selectDate">
      <form action="#">
        <div className="input-group">
        <label htmlFor="">Start Date</label>
        <DateTimePicker onChange={onChangeStart} value={valueStart} />

        </div>
        <div className="input-group">
        <label htmlFor="">End Date</label>
        <DateTimePicker onChange={onChangeEnd} value={valueEnd} />

        </div>
    <button onClick={(e)=>handleSubmit(e)}>Book</button>
    </form>
    </div>
  );
};

export default SelectDate;
