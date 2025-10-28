import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NavBar from "../components/header/NavBar";

const AdminLayout = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default AdminLayout;