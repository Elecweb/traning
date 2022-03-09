import { Form, Field } from "react-final-form";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import avatar from "../assets/images/avatar.png";
import plusIcon from "../assets/images/plus.png";

const Register = () => {
  const user: { email: string; password: string } = {
    email: "pathomphob.s@20scoops.net",
    password: "20scoop",
  };

  const onSubmit = (values: {
    email: string;
    password: string;
    cfPassword: string;
  }) => {
    if (values.email === user.email && values.password === user.password) {
      toast.success("Success Login!", { autoClose: 3000 });
    } else {
      toast.error("Email or Password is incorrect", { autoClose: 3000 });
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
            const errors: {
              email?: string;
              password?: string;
              confirmPassword?: string;
            } = {};
            console.log(errors);
            if (!validateEmail(values.email)) {
              errors.email = "Please enter a valid email address.";
            }
            if (!values.email) {
              errors.email = "Please enter the email.";
            }

            if (!values.password) {
              errors.password = "Please enter the password.";
            }

            if (!values.cfPassword) {
              errors.confirmPassword = "Please enter the confirm password.";
            }

            return errors;
          }}
          render={({ handleSubmit, values, errors }) => (
            <form
              onSubmit={handleSubmit}
              className="mx-auto w-11/12 sm:w-7/12 lg:w-4/12 flex flex-col shadow-lg p-8 md:p-10 bg-white rounded ease-out duration-300"
            >
              <p className="text-center uppercase font-bold pb-8 text-xl">
                Register
              </p>

              <div className="relative w-36 h-36 mx-auto">
                <img
                  className="lg:w-40 object-cover object-center rounded-full"
                  src={avatar}
                />
                <img
                  className="absolute bottom-0 right-3 w-8 h-8 cursor-pointer"
                  src={plusIcon}
                />
              </div>

              <label className="text-md py-2 font-light">Email</label>
              <Field name="email">
                {({ input, meta }) => (
                  <div className="flex flex-col">
                    <input
                      {...input}
                      className="h-12 px-4 w-100 bg-gray-100 focus:bg-gray-200 rounded focus:outline-none ring-black focus:ring-2"
                      type="text"
                      placeholder="Email"
                    />
                    {meta.error && meta.touched && (
                      <span className="text-xs text-red-500 pt-1">
                        {meta.error}
                      </span>
                    )}
                  </div>
                )}
              </Field>

              <label className="text-md py-2 font-light">Password</label>
              <Field name="password">
                {({ input, meta }) => (
                  <div className="flex flex-col">
                    <input
                      {...input}
                      className="h-12 px-4 w-100 bg-gray-100 focus:bg-gray-200 rounded focus:outline-none ring-black focus:ring-2"
                      type="password"
                      placeholder="Password"
                    />
                    {meta.error && meta.touched && (
                      <span className="text-xs text-red-500 pt-1">
                        {meta.error}
                      </span>
                    )}
                  </div>
                )}
              </Field>

              <label className="text-md py-2 font-light">
                Confirm Password
              </label>
              <Field name="confirmPassword">
                {({ input, meta }) => (
                  <div className="flex flex-col">
                    <input
                      {...input}
                      className="h-12 px-4 w-100 bg-gray-100 focus:bg-gray-200 rounded focus:outline-none ring-black focus:ring-2"
                      type="password"
                      placeholder="Confirm Password"
                    />
                    {meta.error && meta.touched && (
                      <span className="text-xs text-red-500 pt-1">
                        {meta.error}
                      </span>
                    )}
                  </div>
                )}
              </Field>

              <div className="pt-5 flex flex-col">
                <span className="text-xs text-red-500 leading-5">
                  * Password must be at least 1 uppercase letter
                </span>
                <span className="text-xs text-red-500 leading-5">
                  * Password must be at least 1 lowercase letter
                </span>
                <span className="text-xs text-red-500 leading-5">
                  * Password must be at least 1 special character
                </span>
                <span className="text-xs text-red-500 leading-5">
                  * Password must be at least 8 characters
                </span>
              </div>

              <button className="btn btn-primary bg-gray-900 text-white rounded h-12 mt-6">
                Register
              </button>
            </form>
          )}
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
