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
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 4000));

      login(data);
      navigate("/dashboard");
    } catch (error) {
      console.log("Login failed", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 overflow-hidden h-screen w-full">
      <div className="hidden sm:block h-screen">
        <img
          className="w-full h-full object-cover"
          src={auth}
          alt="Auth illustration"
        />
      </div>

      <div className="flex items-center justify-center sm:border-none p-4">
        <form
          onSubmit={handleSubmit(onsubmit)}
          className="max-w-[400px] w-full my-8 sm:my-[5rem] mx-auto bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-2xl sm:text-3xl text-center font-medium text-blue-950">
            Login
          </h2>

          <div className="flex flex-col py-4 space-y-1">
            <label className="text-sm sm:text-base">Email</label>
            <input
              className="border-[#467fcf] border rounded p-2 sm:p-3 outline-none"
              type="text"
              placeholder="Email"
              {...register("email", { required: true })}
            />
          </div>

          <div className="flex flex-col py-2">
            <label className="text-sm sm:text-base">Password</label>
            <input
              className="border-[#467fcf] border rounded p-2 sm:p-3 outline-none"
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
          </div>

          <button
            className="flex justify-center items-center gap-2 border rounded-md w-full my-5 py-2 bg-[#467fcf] text-white"
            disabled={isLoading}
          >
            {isLoading && (
              <span className="inline-block w-3 h-3 sm:w-4 sm:h-4 border-2 border-white border-b-transparent rounded-full animate-spin"></span>
            )}
            <span>Sign in</span>
          </button>

          <div className="flex justify-between text-xs sm:text-sm">
            <p className="flex items-center">
              <input type="checkbox" className="mr-1" />
              Remember me
            </p>
            <a href="/" className="text-blue-400">
              Forgot Password?
            </a>
          </div>

          <p className="text-center text-sm sm:text-base text-blue-400 mt-4">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-orange-500">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
