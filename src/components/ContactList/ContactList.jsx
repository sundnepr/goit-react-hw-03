
import Contact from "../Contact/Contact";
// import css from '../FriendList/FriendList.module.css';

const ContactList = ({ contact }) => {

    return (
     
    <ul>
      <>
        {contact.map(({ id, name, number}) => (
        <Contact
            key={id}
            name={name}
            number={number}
            />
        ))}
      </>
    </ul>
  );
};

export default ContactList;