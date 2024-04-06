import { Formik, Field, ErrorMessage, FormikHelpers, Form } from "formik";
import * as Yup from "yup";
import backgroundImage from "../../../assets/AuthImages/pets1.jpg";
import axios from "axios";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface FormValues {
  name: string;
  username: string;
  email: string;
  password: string;
  city: string;
  state: string;
}

const initialValues: FormValues = {
  name: "",
  username: "",
  email: "",
  password: "",
  city: "",
  state: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .max(15, "Must be 15 character or less")
    .required("Required"),

  username: Yup.string()
    .max(12, "Must be 12 character or less")
    .required("Required"),
  email: Yup.string().email("Inavlid email address").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(3, "Try having a longer password"),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
});

const handleSubmit = async (
  values: FormValues,
  { resetForm, setSubmitting }: FormikHelpers<FormValues>
) => {
  console.log("clicked submit");
  console.log(values);
  try {
    setSubmitting(true);
    const payload = values;
    const { data } = await axios.post(
      "http://localhost:3000/veterinarian/register",
      payload
    );
    console.log(data);
    toast.success("Successfully Registered", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    resetForm();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
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

    // resetForm();
  } finally {
    // Set isSubmitting back to false after form submission is complete
    setSubmitting(false);
  }
};

const PetParentRegistration = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div className="flex h-screen w-screen">
      {/* Left Half - Form */}
      <div className="w-1/2 p-8 bg-purple-300 relative">
        <div className="absolute right-10 underline">
          <button type="button" onClick={handleLogin}>
            Login Instead
          </button>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="max-w-md mx-auto bg-purple-400 shadow-2xl rounded-lg px-10 pt-6 pb-8 mb-5">
              <h1 className="text-3xl font-bold text-center text-purple-900 mb-6 font-pacifico">
                Pet Parent Registration
              </h1>

              {/* Name */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              {/* Username */}
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <Field
                  type="username"
                  id="username"
                  name="username"
                  className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              {/* Password */}
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              {/* City Name */}
              <div className="mb-4">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <Field
                  as="select"
                  id="city"
                  name="city"
                  className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="ludhiana">Ludhiana </option>
                  <option value="Amritsar">Amritsar </option>
                  <option value="Delhi">Delhi </option>
                </Field>
                <ErrorMessage
                  name="city"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              {/* State Name */}
              <div className="mb-4">
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-gray-700"
                >
                  State
                </label>
                <Field
                  as="select"
                  id="state"
                  name="state"
                  className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="ludhiana">Ludhiana </option>
                  <option value="Amritsar">Amritsar </option>
                  <option value="Delhi">Delhi </option>
                </Field>
                <ErrorMessage
                  name="state"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-purple-900 text-white font-semibold px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-300 ease-in-out"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
              <ToastContainer transition={Bounce} />
            </Form>
          )}
        </Formik>
      </div>

      <div
        className="w-1/2  bg-center m-4"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};

export default PetParentRegistration;
