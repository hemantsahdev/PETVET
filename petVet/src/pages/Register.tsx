// CLIENT REGISTRATION
// This is the register page for the clients ( any other specific register page will be in its desired folder)


import axios from "axios";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { Bounce, toast, ToastContainer } from "react-toastify";
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {

  const handleSubmit = async (
    values: {
      name: string;
      username: string;
      email: string;
      password: string;
      city: string;
      state: string;
    },
    {
      resetForm,
    }: FormikHelpers<{
      name: string;
      username: string;
      email: string;
      password: string;
      city: string;
      state: string;
    }>
  ) => {
    console.log(values);
    try {
      const payload = values;
      const data = await axios.post(
        "http://localhost:3000/petParent/register",
        payload
      );
      console.log(data);
      console.log();
      toast.success("data", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      // resetForm();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err:any) {
      toast.error(err.response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.log(err);

      console.error(err.message);
      resetForm();
    }
  };
  return (
    <main className="flex flex-col w-screen h-screen justify-center items-center">
      <Formik
        initialValues={{
          name: "",
          username: "",
          email: "",
          password: "",
          city: "",
          state: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must be 15 character or less")
            .required("Required"),

          username: Yup.string()
            .max(12, "Must be 12 character or less")
            .required("Required"),
          email: Yup.string()
            .email("Inavlid email address")
            .required("Required"),
          password: Yup.string()
            .required("Required")
            .min(3, "Try having a longer password"),
          city: Yup.string().required("Required"),
          state: Yup.string().required("Required"),
        })}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col gap-10 ">
          <label htmlFor="name">Name</label>
          <Field
            name="name"
            placeholder="Enter your name"
            type="text"
            className="border border-4 border-red-400 border-solid p-2"
          />
          <ErrorMessage name="name" />

          <Field name="username" placeholder="Enter a username" type="text" />
          <ErrorMessage name="username" />

          <Field name="email" placeholder="Enter your email" type="email" />
          <ErrorMessage name="email" />

          <Field
            name="password"
            placeholder="Enter a password"
            type="password"
          />
          <ErrorMessage name="password" />

          <Field name="city" as="select">
            <option value="ludhiana">Ludhiana </option>
            <option value="Amritsar">Amritsar </option>
            <option value="Delhi">Delhi </option>
          </Field>
          <ErrorMessage name="city" />

          <Field name="state" as="select">
            <option value="punjab">Punjab </option>
            <option value="Delhi">Delhi </option>
            <option value="goa">Goa </option>
          </Field>
          <ErrorMessage name="state" />
          <button type="submit"> Submit </button>
          <ToastContainer transition={Bounce} /> 

        </Form>
      </Formik>
    </main>

   
  );
};

export default Register;
