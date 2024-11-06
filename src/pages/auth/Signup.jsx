import React from "react";
import auth from "../../assets/img/Mobile login-rafiki.png";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="grid grid-flow-col overflow-hidden  sm:grid-cols-2 h-screen w-full">
      <div className="hidden h-screen sm:block">
        <img
          className="w-full h-full object-cover"
          src={auth}
          alt="Login illustration"
        />
      </div>

      <div className="w-full  flex flex-col items-center p-6 sm:p-10 space-y-4 bg-white">
        <form className="max-w-[400px]  w-full h-10rem my-[5rem]  mx-auto bg-white p-4 sm:border-red-400  space-y-6 ">
          <h2 className="text-3xl text-center font-medium text-blue-950 text-primary">
            Create an Account
          </h2>
          <div className="flex flex-col">
            <label htmlFor="firstName" className="mb-1 text-gray-700">
              First Name
            </label>
            <input
              id="firstName"
              className="w-full border border-[#467fcf] rounded p-2 outline-none"
              type="text"
              placeholder="First Name"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-gray-700">
              Email
            </label>
            <input
              id="email"
              className="w-full border border-[#467fcf] rounded p-2 outline-none"
              type="email"
              placeholder="Email"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="mb-1 text-gray-700">
              Password
            </label>
            <input
              id="password"
              className="w-full border border-[#467fcf] rounded p-2 outline-none"
              type="password"
              placeholder="Password"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="h-4 w-4 text-primary-color"
              id="terms"
            />
            <label htmlFor="terms" className="text-blue-400">
              I agree to the terms & conditions
            </label>
          </div>

          <button className="w-full py-2 rounded-md bg-[#467fcf] text-white">
            Sign up
          </button>

          <p className="text-center text-blue-400">
            Already have an account?{" "}
            <Link className="text-orange-500" to="">
              {" "}
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
