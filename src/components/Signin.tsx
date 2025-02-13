import { Link } from "react-router-dom";


import { SigninInput } from "@aktmishra/medium_common";
import LabelInput from "./LabelInput";
import { useState } from "react";

const Signin = () => {
  const [signupInputs, setSignupInputs] = useState<SigninInput>({
    email: "",
    password: "",
  });
  return (
    <div className=" h-screen w-full md:w-1/2  items-center bg-white flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className=" max-w-md w-full px-6 py-8 border-2 border-gray-200 rounded-xl bg-gray-200">
        <div className="py-8">
          <div className="flex flex-col text-center">
            <h1 className="font-extrabold text-2xl text-slate-700 min-md:text-xl text-center">
              Welcome Back
            </h1>

            <p className=" text-slate-400 text-sm">
            Don't have an account?{" "}
              <Link to="/signup" className="underline font-semibold">
                Sign Up
              </Link>
            </p>
          </div>
          <div className="mt-4 flex flex-col gap-3">
           

            <LabelInput
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              name="email"
              onChange={(e) => {
                setSignupInputs({
                  ...signupInputs,
                  email: e.target.value,
                });
              }}
            ></LabelInput>
            <LabelInput
              label="Password"
              type="password"
              placeholder="Enter password"
              name="password"
              onChange={(e) => {
                setSignupInputs({
                  ...signupInputs,
                  password: e.target.value,
                });
              }}
            ></LabelInput>
            <button
              type="button"
              className="mt-3 w-full sm:mx-auto sm:w-full sm:max-w-sm text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};




export default Signin;
