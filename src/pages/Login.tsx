import React from "react";
import { Form } from "react-final-form";
import { useForm, useField } from "react-final-form";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FiledInput from "../components/FieldInput";

const Login = () => {
  type UserType = {
    email: string;
    password: string;
  };

  const user: UserType = {
    email: "pathomphob.s@20scoops.net",
    password: "20scoops",
  };

  const setToastId = "toast-id";

  const onSubmit = (values: UserType) => {
    if (values.email === user.email && values.password === user.password) {
      toast.success("Success Login!", {
        autoClose: 1500,
        toastId: setToastId,
      });
    } else {
      toast.error("Email or Password is incorrect", {
        autoClose: 1500,
        toastId: setToastId,
      });
    }
  };

  const validateEmail = (email?: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  return (
    <div className="w-screen h-screen">
      <div className="w-screen h-screen flex flex-col justify-center bg-black">
        <Form
          onSubmit={onSubmit}
          validate={(values) => {
            const errors: { email?: string; password?: string } = {};
            if (!validateEmail(values.email)) {
              errors.email = "Please enter a valid email address.";
            }
            if (!values.email) {
              errors.email = "Please enter the email.";
            }

            if (!values.password) {
              errors.password = "Please enter the password.";
            }

            return errors;
          }}
          render={({ handleSubmit, values, errors }) => (
            <form
              onSubmit={handleSubmit}
              className="mx-auto w-11/12 sm:w-7/12 lg:w-4/12 flex flex-col shadow-lg p-8 md:p-10 bg-white rounded ease-out duration-300"
            >
              <p className="text-center uppercase font-bold pb-8 text-xl">
                Login
              </p>

              <FiledInput
                label="Email"
                name="email"
                type="string"
                placeholder="Email"
              />

              <FiledInput
                label="Password"
                name="password"
                type="password"
                placeholder="Password"
              />

              <button className="bg-gray-900 hover:bg-gray-800 text-white rounded h-12 mt-6">
                Login
              </button>
            </form>
          )}
        />
      </div>
      <ToastContainer limit={1} />
    </div>
  );
};

export default Login;
