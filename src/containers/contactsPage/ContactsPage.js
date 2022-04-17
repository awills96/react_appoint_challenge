import React, {useState, useEffect} from "react";
import {ContactForm} from '../../components/contactForm/ContactForm'
import {TileList} from '../../components/tileList/TileList'

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isDuplicate, toggleDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log('called handleSubmit!')
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!isDuplicate){
      props.addContact(name, phone, email)
      setEmail('');
      setName('');
      setPhone('');
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

 useEffect(() => {
    if (props.contacts.find(contact => contact.name === name)) { toggleDuplicate(true) }
    else { toggleDuplicate(false) }
 }, [props.contacts, name])

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
        name={name} phone={phone} email={email}
        setName={setName} setEmail={setEmail} setPhone={setPhone}
        handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={props.contacts}/>
      </section>
    </div>
  );
};
