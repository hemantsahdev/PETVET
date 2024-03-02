import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";

const AskQuestion = () => {
  const initialValues = {
    title: "",
    description: "",
    reference:[],
    tags:[]
  };

  const validationSchema = object({
    title: string().required("Name for the community is mandatory"),
    description: string().required(
      "A brief description is required for starting a community"
    ),
    tags:string().required("please refer this question to a community ")
  });

  const onSubmit = (values, { resetForm }) => {
    console.log("Form data is being submitted", values);
    // You can perform additional actions here, such as sending the data to a server.
    // Optionally, reset the form after submission
    resetForm();
  };

  return (
    <>
      <div className="flex flex-col">
        <div>
          <h1 className="text-3xl">Ask a public question!</h1>
        </div>

        {/* form for the question details and all */}
        <div className="max-w-md mx-auto mt-8 p-4 bg-gray-400 rounded-md">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form className="space-y-4">
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title:
                </label>
                <Field
                  type="text"
                  id="title"
                  name="title"
                  className="mt-1 p-2 w-full border border-stone-900 rounded-md"
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Explain your question in detail:
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

              <div>
                <label htmlFor="reference">
                  Add any refernce material (if any)
                </label>
                <Field
                  type="text"
                  id="reference"
                  name="reference"
                  className="mt-1 p-2 w-full border border-stone-900 rounded-md"
                />
              </div>

              <div>
                <label htmlFor="tags">Add the matching tags</label>
                <Field
                  type="text"
                  id="tags"
                  name="tags"
                  className="mt-1 p-2 w-full border border-stone-900 rounded-md"
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
      </div>
    </>
  );
};

export default AskQuestion;
