import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaApple } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { SIGNUP_URL } from "../../UserLayout/pages/appointments/apiConfig";

const AuthSignup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setUser({
      ...user,
      [id]: type === "checkbox" ? checked : value,
    });
    setErrors({ ...errors, [id]: "" });
  };
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: "",
    };
    let valid = true;

    // Name validation
    if (!user.name.trim()) {
      newErrors.name = "Please enter your name";
      valid = false;
    }

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
    } else if (user.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
      valid = false;
    }

    if (!user.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
      valid = false;
    } else if (user.password !== user.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      valid = false;
    }

    if (!user.terms) {
      newErrors.terms = "You must agree to the terms";
      valid = false;
    }

    setErrors(newErrors);
    if (!valid) return;
    setLoading(true);

    try {
      const res = await fetch(SIGNUP_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          password: user.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage({ type: "error", text: data.message || "Signup failed" });
        setLoading(false);
        return;
      }
      setMessage({ type: "success", text: "Account created successfully!" });
      navigate("/signin");
    } catch (error) {
      console.log("error in signup", error);
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center lg:block">
      <form
        className="w-full max-w-md bg-transparent rounded-lg mt-10"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-2">
          Create new account
        </h2>

        <p className="text-center text-gray-500 text-sm mb-8">
          Please provide all information required to create your account
        </p>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            {errors.name ? (
              <span className="text-red-500">{errors.name}</span>
            ) : (
              "Name"
            )}
          </label>
          {message.text && (
            <p
              className={`mb-4 text-center p-2 rounded-lg ${
                message.type === "success"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {message.text}
            </p>
          )}

          <input
            type="text"
            id="name"
            placeholder="Name"
            value={user.name}
            onChange={handleChange}
            className={`w-full p-2.5 border rounded-lg focus:ring-2 outline-none ${
              errors.name
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-400 focus:ring-blue-500"
            }`}
          />
        </div>

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
            className={`w-full p-2.5 border rounded-lg focus:ring-2 outline-none ${
              errors.email
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-400 focus:ring-blue-500"
            }`}
          />
        </div>

        <div className="mb-2">
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
            className={`w-full p-2.5 border rounded-lg focus:ring-2 outline-none ${
              errors.password
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-400 focus:ring-blue-500"
            }`}
          />
        </div>

        <p className="text-xs text-gray-500 mb-5">
          Must be at least 8 characters
        </p>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900">
            {errors.confirmPassword ? (
              <span className="text-red-500">{errors.confirmPassword}</span>
            ) : (
              "Confirm Password"
            )}
          </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={user.confirmPassword}
            onChange={handleChange}
            className={`w-full p-2.5 border rounded-lg focus:ring-2 outline-none ${
              errors.confirmPassword
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-400 focus:ring-blue-500"
            }`}
          />
        </div>

        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            id="terms"
            checked={user.terms}
            onChange={handleChange}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
            {errors.terms ? (
              <span className="text-red-500">{errors.terms}</span>
            ) : (
              <>
                I agree to the{" "}
                <a href="#" className="text-blue-700 hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-700 hover:underline">
                  Privacy Policy
                </a>
              </>
            )}
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3.5 bg-blue-900 text-white font-medium rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 transition-all ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Creating account..." : "Create an account"}
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
