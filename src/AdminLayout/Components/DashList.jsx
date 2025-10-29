import React from "react";
import DashCard from "./DashCard";

const DashList = ({ doctors }) => {
  console.log(doctors);
  return (
    <div className="flex justify-center ">
      <div className="flex flex-col gap-6 w-10/12">
        {doctors.map((doctor) => (
          <DashCard doctor={doctor} key={doctor.id} />
        ))}
      </div>
    </div>
  );
};

export default DashList;
