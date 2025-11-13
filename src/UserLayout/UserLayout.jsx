import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Home from "./pages/home/Home";
import SignUp from "./pages/auth/SignUp";
import Booking from "./pages/Booking/Booking";
import Appointments from "./pages/appointments/Appointments";
import NotFound from "../components/not_found/NotFound";
import Doctors from "./pages/doctors/Doctors";
import Contacts from "./pages/contact-us/Contacts";
import Profile from "./pages/profile/Profile"
import Privacy from "./pages/Privacy-policy/Privacy";

const UserLayout = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="signin" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="booking" element={<Booking />} />
        <Route path="appointments/:doctorId?" element={<Appointments />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="contact-us" element={<Contacts />} />
        <Route path="privacy-policy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default UserLayout;
