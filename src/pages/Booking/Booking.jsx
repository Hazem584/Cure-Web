import React, { useState } from "react";
import Buttons from "./components/Buttons";
import Calender from "./components/Calendar";
import List from "./components/List";
const Booking = () => {
  const [Doctors] = useState([
    {
      id: 101,
      name: "Dr. Sarah Mitchell",
      specialty: "Cardiologist",
      appointment_time: "Saturday, October 18 - 09:30 AM",
      address: "22 Baker St, London, UK",
      status: "Upcoming",
      photo:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 102,
      name: "Dr. James Carter",
      specialty: "Dentist",
      appointment_time: "Wednesday, October 15 - 10:15 AM",
      address: "47 King’s Rd, Manchester, UK",
      status: "Completed",
      photo:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 103,
      name: "Dr. Emily Johnson",
      specialty: "Dermatologist",
      appointment_time: "Tuesday, October 14 - 11:00 AM",
      address: "8 Queen St, Birmingham, UK",
      status: "Canceled",
      photo:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 104,
      name: "Dr. Robert Smith",
      specialty: "Neurologist",
      appointment_time: "Sunday, October 19 - 12:30 PM",
      address: "15 Park Ave, Leeds, UK",
      status: "Upcoming",
      photo:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 105,
      name: "Dr. Olivia Brown",
      specialty: "Pediatrician",
      appointment_time: "Sunday, October 12 - 02:00 PM",
      address: "33 Oxford Rd, Liverpool, UK",
      status: "Completed",
      photo:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 106,
      name: "Dr. Ethan Wilson",
      specialty: "Orthopedic Surgeon",
      appointment_time: "Friday, October 17 - 03:15 PM",
      address: "90 Church St, Bristol, UK",
      status: "Canceled",
      photo:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=300&q=80",
    },
  ]);

  return (
    <div className="container mx-auto px-4 flex flex-col gap-1 mt-8 ">
      <h1 className="font-georgia text-2xl">Your appointments</h1>
      <div className="flex justify-end">
        <Calender />
      </div>
      <div>
        <Buttons />
      </div>
      <div>
        <List Doctors={Doctors} />
      </div>
    </div>
  );
};

export default Booking;
