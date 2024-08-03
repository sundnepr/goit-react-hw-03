import { useId } from "react";
import { Formik, Form, Field } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { nanoid } from "nanoid";

// const phoneRegExp =  
const ContactFormSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().matches(/^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/, "Номер телефону має співпадати з форматом 'xxx-xxx-xx-xx'").required("Required"),
});


const initialValues = {
  name: "",
        number: ""
};

const ContactForm = ({onAddContact} ) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, {resetForm}) => {
		console.log(values);
    const newContact= {
      name: values.name,
      number: values.number,
      id: nanoid()
    }
    onAddContact(newContact);
    // console.log(actions);
		resetForm();
	};

  return (
    <Formik
      initialValues={initialValues}
          onSubmit={ handleSubmit }
          validationSchema={ContactFormSchema}
    >
          <Form className={css.form}>
               <label className={css.label} htmlFor={nameFieldId}>Name</label>
              <Field className={css.field} type="text" name="name" id={nameFieldId} />
              <ErrorMessage className={css.errorText} name="name" component="span" />
              <label className={css.label} htmlFor={numberFieldId}>Number</label>
              <Field className={css.field} type="tel" name="number" id={numberFieldId} />
              <ErrorMessage className={css.errorText} name="number" component="span" />
        <button className={css.submitBtn} type="submit">Add contact</button>
      </Form>
     
    </Formik>
  );
};

export default ContactForm;
