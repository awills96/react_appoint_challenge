import React from "react";

export const ContactForm = (props) => {

  const handleChange = (e) =>{
    //console.log(e.target.type);
    const type = e.target.type;
    if (type === 'text'){
      props.setName(e.target.value)
    } else if(type === 'tel'){
      props.setPhone(e.target.value)
    } else {
      props.setEmail(e.target.value)
    }
  }

  return (
    <form onSubmit={props.handleSubmit}>
      <input type='text' value={props.name} onChange={handleChange}></input>
      <input type='tel' value={props.phone} pattern="^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$" onChange={handleChange}></input>
      <input type='email' value={props.email} onChange={handleChange}></input>
      <button type='submit'>Submit</button>
    </form>
  );
};
