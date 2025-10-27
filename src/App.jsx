import React from "react";
import { Route, Routes } from "react-router-dom";
import Booking from "./pages/Booking/Booking";
import Appointments from "./pages/appointments/Appointments";
import NotFound from "./components/not_found/NotFound";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Contacts from "./pages/contact-us/Contacts";
import Doctors from "./pages/doctors/Doctors";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/contact-us" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
