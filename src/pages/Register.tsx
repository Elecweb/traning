import { Form, Field } from "react-final-form";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import avatar from "../assets/images/avatar.png";
import FiledInput from "../components/FieldInput";

const Register = () => {
  type RegisterForm = {
    email: string;
    password: string;
    confirmPassword: string;
  };

  const setToastId = "toast-id";

  const onSubmit = (values: RegisterForm) => {
    toast.success("Success Register!", {
      autoClose: 1500,
      toastId: setToastId,
    });
  };

  const validateEmail = (email?: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validattion = (values: RegisterForm) => {
    const errors: {
      email?: string;
      password?: string;
      confirmPassword?: string;
    } = {};

    if (!values.email) {
      errors.email = "Please enter the email.";
    } else if (!validateEmail(values.email)) {
      errors.email = "Please enter a valid email address.";
    }

    let upperCaseLetters = /[A-Z]/g;
    let lowerCaseLetters = /[a-z]/g;
    let specialCaseLetters = /[!@#$%^&*()_+.,;:]/;

    if (!values.password) {
      errors.password = "Please enter the password.";
    } else if (!values.password.match(upperCaseLetters)) {
      errors.password = "Password must be at least 1 uppercase letter.";
    } else if (!values.password.match(lowerCaseLetters)) {
      errors.password = "Password must be at least 1 lowercase letter.";
    } else if (!values.password.match(specialCaseLetters)) {
      errors.password = "Password must be at least 1 special character.";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters.";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "Please enter the confirm password.";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Passwords don't match.";
    }

    return errors;
  };

  return (
    <div className="w-screen h-screen">
      <div className="w-screen h-screen flex flex-col justify-center bg-black">
        <Form
          onSubmit={onSubmit}
          validate={validattion}
          render={({ handleSubmit, values, errors }) => (
            <form
              onSubmit={handleSubmit}
              className="mx-auto w-11/12 sm:w-7/12 lg:w-4/12 flex flex-col shadow-lg p-8 md:p-10 bg-white rounded ease-out duration-300"
            >
              <p className="text-center uppercase font-bold pb-8 text-xl">
                Register
              </p>

              <div className="relative w-36 h-46 mx-auto">
                <img
                  className="lg:w-40 object-cover object-center rounded-full"
                  src={avatar}
                />
                <p className="text-sm text-center py-3 underline cursor-pointer">
                  Upload Picture
                </p>
              </div>

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

              <FiledInput
                label="Comfirm Password"
                name="confirmPassword"
                type="password"
                placeholder="Password"
              />

              <button className="btn btn-primary bg-gray-900 text-white rounded h-12 mt-6">
                Register
              </button>
            </form>
          )}
        />
      </div>
      <ToastContainer limit={1} />
    </div>
  );
};

export default Register;
