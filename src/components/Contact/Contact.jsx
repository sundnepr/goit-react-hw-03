import css from "./Contact.module.css";
// import clsx from "clsx";
// import { AiOutlineUser } from 'react-icons/ai';
// import { MdOutlineLocalPhone } from 'react-icons/md';



const Contact= ({ name, number}) => {
  return (
      <div className={css.contact}>
       {/* <span >
          <AiOutlineUser size={18} color={'#26b6f9'} />
        </span> */}
      <p > {name}</p>
      <p > {number}</p>
    </div>
  );
};

export default Contact;