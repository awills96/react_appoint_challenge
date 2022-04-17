import React from "react";

export const ContactPicker = (props) => {
  return (
    <select name="contact-select" onChange={props.onChange}>
      <option value="" key='0' selected="selected">--Please choose a contact--</option>
      {props.contacts.map((element, index) => {return <option value={element.name} key={element.name}>{element.name}</option>})}
    </select>
  );
};
