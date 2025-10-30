import { Navbar } from "@material-tailwind/react";
import React from "react";
import NavBar from "../../../components/header/NavBar";
import Footer from "../../../components/footer/Footer";

const Privacy = () => {
  return (
    <>
      <NavBar />
      <div className="px-6 py-8 text-gray-800">
        <h1 className="text-2xl font-semibold  mb-4">Privacy Policy</h1>

        <p className="text-sm text-gray-500 mb-6">
          <span className="font-medium">Last Updated:</span> 19/11/2024
        </p>

        <p className="mb-6 leading-relaxed">
          Welcome to Cure. Your privacy is important to us. This Privacy Policy
          explains how we collect, use, and protect your personal information
          when you use our doctor appointment booking app.
        </p>

        <h2 className="text-xl font-semibold mb-2">terms & conditions</h2>

        <p className="mb-4 leading-relaxed">
          By registering, accessing, or using this app, you confirm that you are
          at least 18 years old (or have parental/guardian consent if younger)
          and agree to be bound by these Terms and our Privacy Policy.
        </p>

        <p className="font-medium mb-2">You agree to:</p>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>Use the app only for lawful purposes.</li>
          <li>
            Provide accurate and complete information during registration and
            booking.
          </li>
          <li>Not impersonate others or create fake accounts.</li>
        </ul>

        <p className="font-medium mb-2">You may not:</p>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>Disrupt or interfere with the app’s functionality.</li>
          <li>Try to access data or systems not meant for you.</li>
          <li>Use the app to harass or abuse doctors or staff.</li>
        </ul>

        <p className="leading-relaxed">
          Your data is handled in accordance with our{" "}
          <span className="font-medium">Privacy Policy</span>. You are
          responsible for keeping your login credentials secure.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
