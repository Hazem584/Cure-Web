import React from "react";
import NavBar from "../../../components/header/NavBar";
import Left from "./components/Left";
import Form from "./components/Form";
import Footer from "../../../components/footer/Footer";

const Contacts = () => {
  return (
    <div className="dark:bg-dark-darkBg" >
      <NavBar />
      <div className="flex flex-row justify-around  mt-20 mb-20 [@media(max-width:900px)]:flex-col [@media(max-width:900px)]:items-center ">
      
        <Left />
        <Form />
      </div>

      <Footer />
    </div>
  );
};

export default Contacts;
