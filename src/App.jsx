import { useState, useEffect } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import inContact from "./contact.json"
import { nanoid } from "nanoid";

function App() {
  const savedStan = JSON.parse(window.localStorage.getItem("saved-stan"));
  const [contact, setContact] = useState(() =>{
    return savedStan !== null ? savedStan : inContact;
  });
  const [searchbox, setSearchBox] = useState("");

  const visibleContact = contact.filter((contact) =>
    contact.name.toLowerCase().includes(searchbox.toLowerCase())
  );

  // const [contactForm, setContactForm] = useState();

  useEffect(() => {
    window.localStorage.setItem("saved-stan", JSON.stringify(contact));
  }, [contact]);
  
  const deleteContact = (contactId) => {
    setContact((prevContact) => {
      return prevContact.filter((contact) => contact.id !== contactId);
    });
  };

  const onAddContact = (newContact) => {
    setContact(prevContacts => [...prevContacts, newContact]);


  };


  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox value={searchbox} onsearchbox={setSearchBox} />

      {/* <ContactList contacts={contact} onDelete={deleteContact} /> */}
     <ContactList contact={visibleContact} onDelete={deleteContact} />
    </>
  );
}

export default App;
