import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { object, string } from "yup";

const CreateCommunity = () => {
  const initialValues = {
    communityName: "",
    description: "",
  };

  const validationSchema = object({
    communityName: string().required("Name for the community is mandatory"),
    description: string().required(
      "A brief description is required for starting a community"
    ),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log("Form data is being submitted", values);
    // You can perform additional actions here, such as sending the data to a server.
    // Optionally, reset the form after submission
    resetForm();
  };

  return (
    <>
      <div className="max-w-md mx-auto mt-8 p-4 bg-gray-400 rounded-md">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="space-y-4">
            <div>
              <label
                htmlFor="communityName"
                className="block text-sm font-medium text-gray-700"
              >
                Community Name:
              </label>
              <Field
                type="text"
                id="communityName"
                name="communityName"
                className="mt-1 p-2 w-full border border-stone-900 rounded-md"
              />
              <ErrorMessage
                name="communityName"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description:
              </label>
              <Field
                type="text"
                id="description"
                name="description"
                className="mt-1 p-2 w-full border border-stone-900 rounded-md"
              />
              <ErrorMessage
                name="description"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
      
      {/* <Link to={"/community/communityName"}>
        <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-800">
          Go to Questions
        </button>
      </Link> */}
    </>
  );
};

export default CreateCommunity;
