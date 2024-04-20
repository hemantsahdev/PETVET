import axios from "axios";
import backgroundImage from "../../assets/AuthImages/pets4.png";
import {
  Card,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { BASE_URL } from "../../Config/Config";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { useSetRecoilState } from "recoil";
import { userRole } from "../../state/Atoms/userRole";

interface logInvalues {
  usernameOrEmail: string;
  password: string;
}

const initialValues: logInvalues = {
  usernameOrEmail: "",
  password: "",
};
const validationSchmea = Yup.object().shape({
  usernameOrEmail: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

const Login = () => {
  const navigate = useNavigate();

 

  const setUserRole = useSetRecoilState(userRole);

  const handleOnSubmit = async (
    values: logInvalues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    try {
      const payload = values;
      const url = `${BASE_URL}/user/login`;
      console.log(url)
      const { data } = await axios.post(url, payload);

      if (data) {
        localStorage.setItem("Authorization", `Bearer ${data.token}`);
        console.log(data)
        if(data.userRole==="veterinarian"){
          navigate("/vet/dashboard");
        }
        else{
          navigate("/home")
        }
        setUserRole(() => data.userRole);
        toast.success(data.message, {
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
      }
    } catch (err: any) {
      console.error(err);
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
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchmea}
        onSubmit={handleOnSubmit}
      >
        <main
          className="h-screen w-full flex justify-center items-center bg-gradient-to-r from-purple-500  to-blue-500"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Card
            placeholder={null}
            color="transparent"
            shadow={false}
            className="border border-purple-500 rounded-xl p-8 bg-white mt-5"
            style={{
              marginLeft: "470px",
              marginTop: "60px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
            }}
          >
            <Typography
              placeholder={null}
              variant="h3"
              color="blue-gray"
              className="text-center mb-2 font-bold"
            >
              Login
            </Typography>
            <Typography
              placeholder={null}
              color="gray"
              className="mt-1 font-normal"
            >
              Nice to see you again! Enter your details and hop in.
            </Typography>

            <Form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-1 flex flex-col gap-6">
                <label htmlFor="">
                  <Typography
                    placeholder={null}
                    variant="h6"
                    color="blue-gray"
                    className="-mb-3"
                  >
                    Username / Email
                  </Typography>
                </label>
                <Field
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900 h-12 text-xl font-bold px-2"
                  name="usernameOrEmail"
                  type="text"
                />

                <Typography
                  placeholder={null}
                  variant="h6"
                  color="blue-gray"
                  className="-mb-3"
                >
                  Password
                </Typography>
                <Field
                  className="h-12 text-xl font-bold px-2"
                  name="password"
                  type="password"
                />
              </div>
              <Checkbox
                label={
                  <Typography
                    placeholder={null}
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                  >
                    I agree the
                    <a
                      href="#"
                      className="font-medium transition-colors hover:text-gray-900"
                    >
                      &nbsp;Terms and Conditions
                    </a>
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
                crossOrigin={null}
              />

              <Button
                placeholder={null}
                className="mt-6 bg-purple-500 hover:bg-purple-700 hover:text-purple"
                fullWidth
                type="submit"
              >
                Login
              </Button>
              <Typography
                placeholder={null}
                color="gray"
                className="mt-4 text-center font-normal"
              >
                Don't have an account?{" "}
                <button
                  className="font-medium text-purple-500 "
                  onClick={() => navigate("/registration")}
                >
                  Register here!
                </button>
              </Typography>
            </Form>
          </Card>
          <ToastContainer transition={Bounce} />
        </main>
      </Formik>
    </>
  );
};

export default Login;
