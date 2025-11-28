import React, { useState } from "react";
import NavBar from "./../../../components/header/NavBar";
import Buttons from "./components/Buttons";
import List from "./components/List";
import Footer from "../../../components/footer/Footer";
import Calendar from "./components/Calendar";
import useAxios from "../../../hooks/useAxios";
const URL = import.meta.env.VITE_API_URL;

const Booking = () => {
  const token = localStorage.getItem("userToken");
  const {
    data: Doctors,
    loading,
    error,
  } = useAxios(`${URL}/appointments/getAppointments`, token);
  const [activeButton, setActiveButton] = useState("All");
  const [selectedDate, setSelectedDate] = useState(null);
  console.log(Doctors);
  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error}</p>;

  const filteredDoctors = Doctors.data.filter(
    (doctor) =>
      (activeButton === "All" || doctor.status === activeButton) &&
      (!selectedDate || doctor.appointmentDate.includes(selectedDate))
  );

  return (
    <>
      <div className="bg dark:bg-dark-darkBg ">
        <NavBar />
        <div className="container mx-auto px-4 flex flex-col gap-1 mt-8 ">
          <h1 className="font-georgia text-2xl dark:text-dark-textOnDark">
            Your appointments
          </h1>
          <div className="flex justify-center sm:justify-end ">
            <Calendar setSelectedDate={setSelectedDate} />
          </div>
          <div>
            <Buttons
              activeButton={activeButton}
              setActiveButton={setActiveButton}
            />
          </div>
          <div>
            <List Doctors={filteredDoctors} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Booking;
