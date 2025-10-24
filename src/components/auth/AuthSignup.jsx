import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaApple } from "react-icons/fa";

const AuthSignup = () => {
  return (
    <div className="flex  items-center justify-center  lg:block">
      <form className="w-full max-w-md bg-transparent rounded-lg mb-32 lg:mb-40">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-2">
          Create new account
        </h2>

        <p className="text-center text-gray-500 text-sm mb-8">
          Please provide all information required to create your account
        </p>

        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            required
            className="w-full p-2.5 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

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
            className="w-full p-2.5 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        <div className="mb-2">
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
            className="w-full p-2.5 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        <p className="text-xs text-gray-500 mb-5">
          Must be at least eight characters
        </p>

        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            id="terms"
            required
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
            I agree to the{" "}
            <a href="#" className="text-blue-700 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-700 hover:underline">
              Privacy Policy
            </a>
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-3.5 bg-blue-900 text-white font-medium rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 transition-all"
        >
          Create an account
        </button>

        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-3 text-gray-500 text-sm">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <div className="flex justify-center space-x-20 lg:space-x-24 mb-6">
          <button
            type="button"
            className="p-5 border border-gray-300 rounded-xl hover:bg-gray-100 transition text-blue-600"
          >
            <FaFacebookF className="w-5 h-5" />
          </button>
          <button
            type="button"
            className="p-5 border border-gray-300 rounded-xl hover:bg-gray-100 transition"
          >
            <FcGoogle className="w-5 h-5" />
          </button>
          <button
            type="button"
            className="p-5 border border-gray-300 rounded-xl hover:bg-gray-100 transition text-gray-800"
          >
            <FaApple className="w-5 h-5" />
          </button>
        </div>

        <p className="text-center text-gray-600 text-sm">
          Already have an account?{" "}
          <a
            href="/signin"
            className="text-blue-800 font-medium hover:underline"
          >
            Sign in
          </a>
        </p>
      </form>
    </div>
  );
};

export default AuthSignup;