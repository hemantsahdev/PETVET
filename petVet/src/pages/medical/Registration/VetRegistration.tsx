// VETERIANARIAN REGISTRATION

import { Formik, Field, ErrorMessage, FormikHelpers, Form } from "formik";
import * as Yup from "yup";
import backgroundImage from "../../../assets/AuthImages/pets2.jpg";
import axios from "axios";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface FormValues {
  name: string;
  username: string;
  email: string;
  password: string;
  pincode: string | number;
  city: string;
  state: string;
  mobile: string | number;
  gender: string;
  speciality: string;
}

const initialValues: FormValues = {
  name: "",
  username: "",
  email: "",
  password: "",
  pincode: "", //coz it is a numerical value
  city: "",
  state: "",
  mobile: "", //numerical value
  gender: "",
  speciality: "",
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
  pincode:
    Yup.number()
    .required("Enter the Pincode"),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  mobile: Yup.number()
  .required("Mobile number is must to register as a veterianrian"),
  gender: Yup.string().required("Please select your gender"),
  speciality: Yup.string().required("Please mention your specialities"),
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

const VetRegistration = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div className="flex w-screen h-screen">
      <div className="w-1/2 p-8 bg-orange-200 relative">
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
            <Form className="max-w-md mx-auto bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-orange-300">
              <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 font-pacifico text-orange-700">
                Veterinarian Registration
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
                  type="text"
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

              {/* pincode */}
              <div className="mb-4">
                <label
                  htmlFor="pincode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Pincode
                </label>
                <Field
                  type="text"
                  id="pincode"
                  name="pincode"
                  className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="pincode"
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

              {/* Mobile Number*/}
              <div className="mb-4">
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mobile Number
                </label>
                <Field
                  type="number"
                  id="mobile"
                  name="mobile"
                  className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="mobile"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              {/* Gender */}
              <div className="mb-4">
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium text-gray-700"
                >
                  Gender
                </label>
                <Field
                  as="select"
                  id="gender"
                  name="gender"
                  className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="ludhiana">Male </option>
                  <option value="Amritsar">Female </option>
                  <option value="Delhi">Other </option>
                </Field>
                <ErrorMessage
                  name="gender"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              {/* Speciality*/}
              <div className="mb-4">
                <label
                  htmlFor="speciality"
                  className="block text-sm font-medium text-gray-700"
                >
                  Speciality
                </label>

                <Field
                  as="textarea" // Use "textarea" instead of "input"
                  id="speciality"
                  name="speciality"
                  className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="speciality"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-orange-700 text-white font-semibold px-4 py-2 rounded-md hover:bg-orange-500 transition-colors duration-300 ease-in-out"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
              <ToastContainer transition={Bounce} />
            </Form>
          )}
        </Formik>
      </div>

      {/* Right Half - Image */}
      <div
        className="w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
    </div>
  );
};

export default VetRegistration;
