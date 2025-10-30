import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaApple } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });
    setErrors({ ...errors, [id]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = { email: "", password: "" };
    let valid = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!user.email) {
      newErrors.email = "Please enter your email";
      valid = false;
    } else if (!emailRegex.test(user.email)) {
      newErrors.email = "Please enter a valid email";
      valid = false;
    }

    if (!user.password) {
      newErrors.password = "Please enter your password";
      valid = false;
    } else if (user.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      setLoading(true);
      setTimeout(() => {
        if (user.email === "admin@gmail.com" && user.password === "123456") {
           const loggedUser = { email: user.email, name: "Sara" };
      localStorage.setItem("user", JSON.stringify(loggedUser));

          navigate("/");
        } else {
          setErrors({ ...newErrors, password: "Invalid email or password" });
        }
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <div className="flex items-center justify-center lg:block">
      <form
        className="w-full max-w-md bg-transparent rounded-lg mt-28"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-2">
          Sign in
        </h2>

        <p className="text-center text-gray-500 text-sm mb-8">
          Please provide all information required to access your account
        </p>

        {/* {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )} */}

        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            {errors.email ? (
              <span className="text-red-500">{errors.email}</span>
            ) : (
              "Email"
            )}
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            className={`w-full p-2 border rounded-lg focus:ring-2 outline-none ${
              errors.email
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-500 focus:ring-blue-500"
            }`}
          />
        </div>

        <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            {errors.password ? (
              <span className="text-red-500">{errors.password}</span>
            ) : (
              "Password"
            )}
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            className={`w-full p-2 border rounded-lg focus:ring-2 outline-none ${
              errors.password
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-500 focus:ring-blue-500"
            }`}
          />
        </div>

        <div className="text-left mb-6">
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Forget the password?
          </a>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3.5 bg-blue-900 text-white font-medium rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 transition-all ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>

        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-3 text-gray-500 text-sm">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <div className="flex justify-center lg:space-x-24 md:space-x-20 space-x-14 mb-6">
          <button
            type="button"
            className="p-5 border border-gray-300 rounded-2xl hover:bg-gray-100 transition"
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
          <a href="/signup" className="text-blue-700 font-medium hover:underline">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
};

export default AuthForm;
