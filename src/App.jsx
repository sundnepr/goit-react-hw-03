import { useState } from "react";
import "./App.css";
// import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import inContact from "./contact.json"

// const contact = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];

function App() {
  const [contact, setContact] = useState(inContact);
  const [searchbox, setSearchBox] = useState("");
    const visibleContact = contact.filter((contact) =>
    contact.name.toLowerCase().includes(searchbox.toLowerCase())
    );
  
  const deleteContact = (contactId) => {
    console.log("id"+contactId)
    setContact((prevContact) => {
      return prevContact.filter((contact) => contact.id !== contactId);
    });
  };
  return (
    <>
      <h1>Phonebook</h1>
      {/* <ContactForm /> */}
      <SearchBox value={searchbox} onsearchbox={setSearchBox} />

      {/* <ContactList contacts={contact} onDelete={deleteContact} /> */}
     <ContactList contact={visibleContact} onDelete={deleteContact} />
    </>
  );
}

export default App;
