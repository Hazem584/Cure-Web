import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaApple } from "react-icons/fa";

const AuthForm = () => {
  return (
    <div className="flex  items-center justify-center  lg:block">
      <form className="w-full max-w-md bg-transparent  rounded-lg mt-28">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-2">
          Sign in
        </h2>

        <p className="text-center text-gray-500 text-sm mb-8">
          Please provide all information required to access your account
        </p>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
            className="w-full p-2 border border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
            className="w-full p-2 border border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        <div className="text-left mb-6">
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Forget the password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full py-3.5 bg-blue-900 text-white font-medium rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 transition-all"
        >
          Sign in
        </button>

        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-3 text-gray-500 text-sm">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <div className="flex justify-center lg:space-x-24 md:space-x-20 space-x-14 mb-6">
          <button
            type="button"
            className="p-5 border border-gray-300 rounded-2xl  hover:bg-gray-100 transition"
          >
            <FcGoogle className="w-5 h-5" />
          </button>
          <button
            type="button"
            className="p-5 border border-gray-300 rounded-2xl hover:bg-gray-100 transition text-blue-600"
          >
            <FaFacebookF className="w-5 h-5" />
          </button>
          <button
            type="button"
            className="p-5 border border-gray-300 rounded-2xl hover:bg-gray-100 transition text-gray-800"
          >
            <FaApple className="w-5 h-5" />
          </button>
        </div>

        <p className="text-center text-gray-600 text-sm">
          Don’t have an account?{" "}
          <a
            href="/signup"
            className="text-blue-700 font-medium hover:underline"
          >
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
};

export default AuthForm;
