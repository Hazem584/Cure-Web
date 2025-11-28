import React from "react";
import {
  Card,
  CardBody,
  Typography,
  Avatar,
  Button,
} from "@material-tailwind/react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import axios from "axios";
const URL = import.meta.env.VITE_API_URL;
const DashCards = ({ doctor, reFetch }) => {
  const show = async (id) => {
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

      const token = localStorage.getItem("token");
      if (!token) {
        return Swal.fire({
          title: "Unauthorized",
          text: "You must be logged in first!",
          icon: "error",
        });
      }
      const response = await axios.delete(`${URL}/doctors`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data: { id },
      });

      Swal.fire({
        title: "Deleted!",
        text: response.data.message,
        icon: "success",
      });
    } catch (err) {
      console.log("DELETE ERROR:", err);
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
    <div>
      <Card className="dark:bg-dark-bgSurface dark:border dark:border-dark-borderDark">
        <CardBody>
          <div className="">
            <div
              key={doctor.id}
              className="flex items-center flex-wrap justify-between pb-3 pt-3 last:pb-0 xl:flex-nowrap"
            >
              <div className="flex items-center gap-x-3">
                <Avatar size="sm" src={doctor.image} alt={doctor.name} />
                <div className="flex flex-col mt-4">
                  <Typography
                    color="blue-gray"
                    className="dark:text-dark-textOnDark"
                    variant="h6"
                  >
                    {doctor.name}
                  </Typography>

                  <Typography
                    color="gray"
                    variant="h6"
                    className="text-gray-700 text-sm sm:text-base dark:text-dark-textSecondary"
                  >
                    {doctor.email}
                  </Typography>
                </div>
              </div>
              <div className="flex gap-5 mt-3 ">
                <Link
                  to={`/admin/edit-doctors/${doctor._id}`}
                  state={{ doctor }}
                >
                  <Button onClick={() => {}}>Edit</Button>
                </Link>

                <Button
                  onClick={() => {
                    show(doctor._id);
                  }}
                  color="red"
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default DashCards;
