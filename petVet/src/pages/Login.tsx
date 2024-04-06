import React from 'react'
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

const Login = () => {
  return (
    <main className="h-screen w-full flex justify-center items-center ">
      <Card placeholder={null} color="transparent" shadow={false}>
        <Typography placeholder={null} variant="h4" color="blue-gray">
          Login
        </Typography>
        <Typography
          placeholder={null}
          color="gray"
          className="mt-1 font-normal"
        >
          Nice to see you again! Enter your details and hop in.
        </Typography>

        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              placeholder={null}
              variant="h6"
              color="blue-gray"
              className="-mb-3"
            >
              Username / Email
            </Typography>
            <Input
              crossOrigin={null}
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

            <Typography
              placeholder={null}
              variant="h6"
              color="blue-gray"
              className="-mb-3"
            >
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              crossOrigin={null}
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
          <Button placeholder={null} className="mt-6" fullWidth>
            Login
          </Button>
          <Typography
            placeholder={null}
            color="gray"
            className="mt-4 text-center font-normal"
          >
            Don't have an account?{" "}
            <a href="#" className="font-medium text-gray-900">
              Register here!
            </a>
          </Typography>
        </form>
      </Card>
    </main>
  );
}

export default Login