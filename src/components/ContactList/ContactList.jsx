
import Contact from "../Contact/Contact";
// import css from '../FriendList/FriendList.module.css';

const ContactList = ({ contact, onDelete }) => {

    return (
     
    <ul>
      
        {contact.map(({ id, name, number}) => (
        <Contact
            id={id}
            name={name}
            number={number}
            onDelete={onDelete}
            />
        ))}
      
    </ul>
  );
};

export default ContactList;