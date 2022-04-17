import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  const [appointments, setAppointments] = useState([]);
  const [contacts, setContacts] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  const addContact = (name, phone, email) => {
    const newContact = {name: name, 
    phone: phone, email: email};
    setContacts((prevContact) => {return [...prevContact, newContact]})
  }

  const addAppointment = (title, contact, date) => {
    const newAppointment = {title: title, contact: contact, date: date};
    setAppointments((prevAppointment) => {return [...prevAppointment, newAppointment]})
  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage 
            addContact={addContact} 
            contacts={contacts}/>
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage 
            addAppointment={addAppointment} 
            contacts={contacts} 
            appointments={appointments}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
