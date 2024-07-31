import { useId } from "react";
import { Formik, Form, Field } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { ErrorMessage } from "formik";

const ContactFormSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().required("Required"),
});


const initialValues = {
  name: "",
        number: ""
};

const ContactForm = () => {
    const nameFieldId = useId();
  const numberFieldId = useId();

    const handleSubmit = (values, actions) => {
		console.log(values);
		actions.resetForm();
	};

  return (
    <Formik
      initialValues={{initialValues}}
          onSubmit={ handleSubmit }
          validationSchema={ContactFormSchema}
    >
          <Form className={css.form}>
               <label htmlFor={nameFieldId}>Name</label>
              <Field className={css.field} type="text" name="name" id={nameFieldId} />
              <ErrorMessage className={css.error} name="name" component="span" />
              <label htmlFor={numberFieldId}>Number</label>
              <Field className={css.field} type="phone" name="number" id={numberFieldId} />
              <ErrorMessage className={css.error} name="number" component="span" />
        <button type="submit">Add contact</button>
      </Form>
     
    </Formik>
  );
};

export default ContactForm;
