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

const DashCards = ({ doctor }) => {
  const show = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
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
                <Avatar size="sm" src={doctor.photo} alt={doctor.name} />
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
                  to={`/admin/edit-doctors/${doctor.id}`}
                  state={{ doctor }}
                >
                  <Button>Edit</Button>
                </Link>

                <Button
                  onClick={() => {
                    show();
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
