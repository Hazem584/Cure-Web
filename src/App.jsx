import { Route, Routes } from "react-router-dom";
import React from "react";
import NotFound from "./components/not_found/NotFound";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile"
const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
};

export default App;
