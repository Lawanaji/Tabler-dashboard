import React, { useState } from "react";
import auth from "../../../assets/img/Mobile login-rafiki.png";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../hooks/useAuth";
const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { error },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const onsubmit = async (data) => {
    try {
      login(data);
      navigate("/");
    } catch (error) {
      console.log("login failed", error);
    }
  };

  return (
    <div className="grid grid-flow-col overflow-hidden  sm:grid-cols-2 h-screen w-full">
      <div className="hidden h-screen sm:block">
        <img className="w-full h-full  object-cover" src={auth} alt="" />
      </div>

      <div className=" border-none ">
        <form
          action="submit"
          onSubmit={handleSubmit(onsubmit)}
          className="max-w-[400px]  w-full my-[5rem]  mx-auto bg-white p-4 sm:border-red-400  space-y-6 "
        >
          <h2 className="text-3xl text-center font-medium text-blue-950 text-primary">
            Login
          </h2>
          <div className="flex flex-col py-5 space-y-2 ">
            <label>Email</label>
            <input
              className=" border-[#467fcf] border rounded p-2 outline-none "
              type="text"
              placeholder="Email"
              {...register("email", { required: true })}
            />
          </div>

          <div className="flex flex-col py-2">
            <label>Password</label>
            <input
              className="border-[#467fcf] border rounded p-2 outline-none"
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
          </div>
          <button
            onSubmit={handleSubmit(onsubmit)}
            className="border rounded-md w-full my-5 py-2  bg-[#467fcf] text-white "
          >
            Sign in
            {isLoading ? <span>is coming</span> : null}
          </button>
          <div className="flex justify-between">
            <p className="flex items-center ">
              <input cl type="checkbox" className="mr-2" />
              Remember me
            </p>
            <a href="/" className="text-blue-400">
              Forget Password?
            </a>
          </div>
          <p className="text-center text-blue-400">
            Don't have an account?{" "}
            <Link to="/signup" className="text-orange-500">
              Sign Up
            </Link>
          </p>
          {/* <div  className='flex justify-around py-5 cursor-pointer'>
          <img className='w-8'  src={google} alt="" />
          <img className='w-8' src={facebook} alt="" />
          <img className='w-8' src={linkedin} alt="" />
          <img className='w-8' src={apple} alt="" />
          </div> */}
        </form>
      </div>

      {/* <Signup/> */}
    </div>
  );
};

export default Login;
