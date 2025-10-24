import React from "react";
import NavBar from "../../components/header/NavBar";
import Footer from "../../components/footer/Footer";
import Form from "./components/Form";
import Left from "./components/Left";

const Contacts = () => {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col pl-24 sm:flex-row mb-32 mt-20 sm:justify-between   ">
        <Left />
        <Form />
      </div>

      <Footer />
    </div>
  );
};

export default Contacts;
