import React, { useState } from "react";
import NavBar from "./../../../components/header/NavBar";
import Buttons from "./components/Buttons";
import List from "./components/List";
import Footer from "../../../components/footer/Footer";
import Calendar from "./components/Calendar";
import useAxios from "../../../hooks/useAxios";
import withAuthUser from "../../../components/hoc/withAuthUser";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { format } from "date-fns";
import Loading from "../../../components/Loading/Loading";
const URL = import.meta.env.VITE_API_BASE_URL;

const Booking = () => {
  const token = localStorage.getItem("token");
  const {
    data: Doctors,
    loading,
    error,
    refetch,
  } = useAxios(`${URL}appointments/getAppointments`, token);
  const [activeButton, setActiveButton] = useState("All");
  const [selectedDate, setSelectedDate] = useState(null);
  console.log("Doctors data:", Doctors);
  if (error) return <p>Error: {error}</p>;

  const filteredDoctors = Doctors?.data?.filter((doctor) => {
    const formattedDoctorDate = format(
      new Date(doctor.createdAt),
      "yyyy-MM-dd"
    );
    const formattedSelectedDate = selectedDate
      ? format(new Date(selectedDate), "yyyy-MM-dd")
      : null;
    console.log("formattedDoctorDate:", formattedDoctorDate);
    return (
      (activeButton === "All" || doctor.status === activeButton) &&
      (!formattedSelectedDate || formattedDoctorDate === formattedSelectedDate)
    );
  });

  return (
    <div className="min-h-screen flex flex-col bg dark:bg-dark-darkBg">
      <NavBar />

      <div className="flex-grow flex flex-col mt-8">
        <div className="container mx-auto px-4 flex flex-col gap-1">
          <h1 className="font-georgia text-2xl dark:text-dark-textOnDark">
            Your appointments
          </h1>

          <div className="flex justify-center sm:justify-end ">
            <Calendar setSelectedDate={setSelectedDate} />
          </div>

          <Buttons
            activeButton={activeButton}
            setActiveButton={setActiveButton}
          />

          <div className="flex-grow flex justify-center items-center mt-6">
            {loading ? (
              <Loading />
            ) : (
              <List Doctors={filteredDoctors} refetch={refetch} />
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const ProtectedBooking = withAuthUser(Booking);
export default ProtectedBooking;
