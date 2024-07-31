import css from "./Contact.module.css";
// import clsx from "clsx";
// import { AiOutlineUser } from 'react-icons/ai';
// import { MdOutlineLocalPhone } from 'react-icons/md';
import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact= ({id, name, number, onDelete}) => {
  return (
      <div className={css.contact}>
      <p > < FaUser />  {name}</p>
      <p > <BsFillTelephoneFill />  {number}</p>
        <button onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};


export default Contact;