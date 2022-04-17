import React, { useState } from "react";
import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm'
import { TileList } from '../../components/tileList/TileList'

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */

  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    props.addAppointment(title, contact, date)
    setTitle('');
    setContact('');
    setDate('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
        title={title} contact={contact} date={date} time={time}
        setTitle={setTitle} setContact={setContact} setDate={setDate} setTime={setTime}
        handleSubmit={handleSubmit} contacts={props.contacts}/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList data={props.appointments}/>
      </section>
    </div>
  );
};
