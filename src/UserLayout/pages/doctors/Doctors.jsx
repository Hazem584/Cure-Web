import React, { useState } from "react";
import NavBar from "../../../components/header/NavBar";
import Footer from "../../../components//footer/Footer";
import Cards from "./components/Cards";
import FilterOptions from "./components/FilterOptions";
import NextPageButton from "./components/NextPageButton";
import DoctorTypes from "./components/DoctorTypes";
import Top from "./components/Top";

const Doctors = () => {
  const [Doc] = useState([
    {
      id: 101,
      name: "Robert Johnson",
      photo:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9jdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    },
    {
      id: 102,
      name: "Robert Johnson",
      photo:
        "https://images.unsplash.com/photo-1659353888906-adb3e0041693?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    },
    {
      id: 103,
      name: "Robert Johnson",
      photo:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    },
    {
      id: 104,
      name: "Robert Johnson",
      photo:
        "https://plus.unsplash.com/premium_photo-1661580574627-9211124e5c3f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZG9jdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    },
    {
      id: 105,
      name: "Robert Johnson",
      photo:
        "https://plus.unsplash.com/premium_photo-1661766718556-13c2efac1388?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    },
    {
      id: 106,
      name: "Robert Johnson",
      photo:
        "https://images.unsplash.com/photo-1643297654416-05795d62e39c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    },
    {
      id: 204,
      name: "Robert Johnson",

      photo:
        "https://plus.unsplash.com/premium_photo-1681966907271-1e350ec3bb95?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1193",
    },
    {
      id: 205,
      name: "Robert Johnson",

      photo:
        "https://images.unsplash.com/photo-1712215544003-af10130f8eb3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
    },
    {
      id: 206,
      name: "Robert Johnson",

      photo:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9jdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    },
  ]);

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => setIsFilterOpen((prev) => !prev);
  return (
    <div className=" dark:bg-dark-darkBg ">
      <NavBar />
      <div className=" mr-10 ml-10  ">
        <Top onToggleFilter={toggleFilter} />
        <div className="flex flex-row [@media(max-width:1400px)]:flex-col mt-10  ">
          {isFilterOpen && <FilterOptions />}

          <div className="w-full flex-col gap-5 ml-5  sm:flex-row  ">
            <h1 className="text-2xl  dark:text-white mb-5">
              Choose Specialties
            </h1>
            <DoctorTypes />
            <Cards Doctor={Doc} />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <NextPageButton />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Doctors;
