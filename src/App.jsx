import { Route, Routes } from "react-router-dom";

import NotFound from "./components/not_found/NotFound";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Home from "./pages/home/Home";
import Booking from "./pages/Booking/Booking";

import Appointments from "./pages/appointments/Appointments";
import React from "react";
import NavBar from "./components/header/NavBar";
const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
