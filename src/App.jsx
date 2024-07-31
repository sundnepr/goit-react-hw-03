import { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import inContact from "./contact.json"

function App() {
  const [contact, setContact] = useState(inContact);
  const [searchbox, setSearchBox] = useState("");
  const visibleContact = contact.filter((contact) =>
    contact.name.toLowerCase().includes(searchbox.toLowerCase())
  );
  const [contactForm, setContactForm] = useState();
  
  const deleteContact = (contactId) => {
    setContact((prevContact) => {
      return prevContact.filter((contact) => contact.id !== contactId);
    });
  };
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm contactForm={contactForm} oncontactForm={setContactForm} />
      <SearchBox value={searchbox} onsearchbox={setSearchBox} />

      {/* <ContactList contacts={contact} onDelete={deleteContact} /> */}
     <ContactList contact={visibleContact} onDelete={deleteContact} />
    </>
  );
}

export default App;
