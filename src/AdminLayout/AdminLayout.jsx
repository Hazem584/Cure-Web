import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NavBar from "../components/header/NavBar";
import DashList from "./Components/DashList";
import AddDoctorView from "./Components/AddDoctorView";
import EditDoctor from "./Components/EditDoctor";
import useAxios from "../hooks/useAxios";

const URL = import.meta.env.VITE_API_URL;

const AdminLayout = () => {
  const token = localStorage.getItem("token");

  const { data: doctors, loading, error } = useAxios(`${URL}/doctors`, token);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<Dashboard />} />
        <Route
          path="doctors-list"
          element={<DashList doctors={doctors.data} />}
        />
        <Route path="add-doctor" element={<AddDoctorView />} />
        <Route path="edit-doctors/:id" element={<EditDoctor />} />
      </Routes>
    </>
  );
};

export default AdminLayout;
