import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker'

export const AppointmentForm = (props) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleChange = (e) =>{
    //console.log(e.target.type);
    const type = e.target.type;
    if (type === 'text'){
      props.setTitle(e.target.value)
    } else if(type === 'date'){
      props.setDate(e.target.value)
    } else if(type === 'time') {
      props.setTime(e.target.value)
    } else {
      props.setContact(e.target.value)
    }
  }

  return (
    <form onSubmit={props.handleSubmit}>
      <input type='text' value={props.title} onChange={handleChange}></input>
      <input type='date' value={props.date} pattern="^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$" onChange={handleChange}></input>
      <input type='time' value={props.time} onChange={handleChange} min={getTodayString}></input>
      <ContactPicker contacts={props.contacts} onChange={handleChange}/>
      <button type='submit'>Submit</button>
    </form>
  );
};
