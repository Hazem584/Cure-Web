import React from "react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
const URL = import.meta.env.VITE_API_BASE_URL;

const CardButttons = ({ status, id, refetch, doctorId }) => {
  let FirstButton = "";
  let SecondButton = "";
  let navigat = useNavigate();
  if (status == "Upcoming") {
    FirstButton = "Cancel";
    SecondButton = "Reschedule";
  } else if (status == "Completed") {
    FirstButton = "Book again";

    SecondButton = "Feedback";
  } else if (status == "Canceled") {
    FirstButton = "Book again";
    SecondButton = "Support";
  }
  const showAlert = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (!result.isConfirmed) return;
      const token = localStorage.getItem("token");
      if (!token) {
        return Swal.fire({
          title: "Unauthorized",
          text: "You must be logged in first!",
          icon: "error",
        });
      }

      const response = await axios.patch(
        `${URL}appointments/cancelAppointments`,
        { appointmentId: id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      Swal.fire({
        title: "Canceled!",
        text: response.data.message,
        icon: "success",
      });
      refetch();
    } catch (err) {
      console.log("Delete Error:", err);
      const errorMessage =
        err.response?.data?.message || "Something went wrong while deleting.";
      Swal.fire({
        title: "Error!",
        text: errorMessage,
        icon: "error",
      });
    }
  };

  return (
    <div className="flex gap-8 [@media(max-width:639px)]:justify-between ">
      <button
        className={`border border-[#99A2AB] px-12 py-2 rounded-xl hover:bg-blue-50 transition [@media(max-width:639px)]:px-5 [@media(max-width:639px)]:py-0 
          [@media(max-width:639px)]:whitespace-nowrap [@media(max-width:639px)]:w-1/2 [@media(max-width:1320px)]:w-3/5 [@media(max-width:1320px)]:px-5   
        ${
          status === "Upcoming"
            ? "text-[#99A2AB] bg-[#FFFFFF] hover:bg-blue-gray-600 hover:text-white  transition dark:text-dark-textOnDark dark:bg-dark-bgSurface dark:hover:bg-red-400"
            : "border border-blue-600 text-blue-600 px-11 py-2 rounded-xl hover:bg-blue-50 transition"
        }
            `}
        onClick={() => {
          if (FirstButton === "Cancel") {
            showAlert(id);
          }
          if (FirstButton == "Book again") {
            navigat(`/appointments/${doctorId}`);
          }
        }}
      >
        {FirstButton}
      </button>
      <button
        className="bg-[#145DB8] text-[#FFFFFF] px-14 py-2 rounded-xl hover:bg-blue-700 transition [@media(max-width:639px)]:px-3 [@media(max-width:639px)]:w-1/2 
          [@media(max-width:1020px)]:px-3 [@media(max-width:1020px)]:w-1/2 [@media(max-width:1320px)]:px-4 [@media(max-width:1320px)]:w-1/2  "
        onClick={() => {
          if (SecondButton == "Reschedule") {
            navigat(`/appointments/${doctorId}`);
          }
          if (SecondButton == "Feedback") {
            navigat("/appointments");
          }
        }}
      >
        {SecondButton}
      </button>
    </div>
  );
};

export default CardButttons;
