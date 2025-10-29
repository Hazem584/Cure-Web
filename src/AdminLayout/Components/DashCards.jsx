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
      title: "Do you want to delete the doctor ?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "delete",
      denyButtonText: `Don't delete`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("deleted !", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <div>
      <Card className="">
        <CardBody>
          <div className="divide-y divide-gray-200">
            <div
              key={doctor.id}
              className="flex items-center justify-between pb-3 pt-3 last:pb-0"
            >
              <div className="flex items-center gap-x-3">
                <Avatar size="sm" src={doctor.photo} alt={doctor.name} />
                <div className="flex flex-col mt-4">
                  <Typography color="blue-gray" variant="h6">
                    {doctor.name}
                  </Typography>
                  <Typography
                    color="gray"
                    variant="h6"
                    className="text-gray-700"
                  >
                    {doctor.email}
                  </Typography>
                </div>
              </div>
              <div className="flex gap-5 mt-3">
                <Link to="/admin/edit-doctors" state={{ doctor }}>
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
