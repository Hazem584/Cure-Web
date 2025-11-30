import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NavBar from "../components/header/NavBar";
import DashList from "./Components/DashList";
import AddDoctorView from "./Components/AddDoctorView";
import EditDoctor from "./Components/EditDoctor";
import useAxios from "../hooks/useAxios";
import Loading from "../components/Loading/Loading";
const URL = import.meta.env.VITE_API_BASE_URL;
import withAuthAdmin from "../components/hoc/withAuthAdmin";

const AdminLayout = () => {
  const token = localStorage.getItem("token");

  const {
    data: doctors,
    loading,
    error,
    refetch,
  } = useAxios(`${URL}doctors`, token);

  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<Dashboard />} />
        <Route
          path="doctors-list"
          element={
            <DashList
              doctors={doctors.data || []}
              loading={loading}
              refetch={refetch}
            />
          }
        />
        <Route
          path="add-doctor"
          element={<AddDoctorView refetch={refetch} />}
        />
        <Route
          path="edit-doctors/:id"
          element={<EditDoctor refetch={refetch} />}
        />
      </Routes>
    </>
  );
};

const ProtectedAdmin = withAuthAdmin(AdminLayout);
export default ProtectedAdmin;
